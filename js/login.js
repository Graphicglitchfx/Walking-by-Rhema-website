import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.getElementById("loginForm");
const errorText = document.getElementById("error");
const btn = form.querySelector("button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  errorText.textContent = ""; // clear old error
  btn.disabled = true;
  btn.textContent = "Signing in...";

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);

    // ✅ success
    window.location.href = "index.html";

  } catch (error) {

    let message = "Login failed";

    switch (error.code) {
      case "auth/user-not-found":
        message = "No account found with this email.";
        break;
      case "auth/wrong-password":
        message = "Incorrect password.";
        break;
      case "auth/invalid-email":
        message = "Invalid email format.";
        break;
      case "auth/invalid-credential":
        message = "Wrong email or password.";
        break;
    }

    errorText.textContent = message;

  } finally {
    btn.disabled = false;
    btn.textContent = "Sign In";
  }
});