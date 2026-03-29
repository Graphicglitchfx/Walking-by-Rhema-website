import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("registerForm");
  const errorText = document.getElementById("error");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    errorText.textContent = "";

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // Save user to Firestore
      await setDoc(doc(db, "users", userCred.user.uid), {
        email: email,
        createdAt: new Date()
      });

      // Redirect after success
      window.location.href = "index.html";

    } catch (error) {

      let message = "Signup failed";

      switch (error.code) {
        case "auth/email-already-in-use":
          message = "Email already exists.";
          break;
        case "auth/weak-password":
          message = "Password must be at least 6 characters.";
          break;
        case "auth/invalid-email":
          message = "Invalid email address.";
          break;
        default:
          message = error.message;
      }

      errorText.textContent = message;
    }

  });

});