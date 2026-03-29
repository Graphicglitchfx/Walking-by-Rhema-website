import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  const authArea = document.getElementById("authArea");

  // Safety check
  if (!authArea) return;

  // ================= AUTH STATE =================
  onAuthStateChanged(auth, (user) => {

    if (user) {
      authArea.innerHTML = `
        <div class="nav-item dropdown">
          <a class="btn nav-signin dropdown-toggle d-flex align-items-center gap-2"
             href="#" data-bs-toggle="dropdown">

            <img src="${user.photoURL || 'images/default-avatar.png'}"
                 class="rounded-circle"
                 width="32"
                 height="32"
                 style="object-fit: cover;">

          </a>

          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <span class="dropdown-item-text small">${user.email}</span>
            </li>

            <li><hr class="dropdown-divider"></li>

            <li>
              <button class="dropdown-item text-danger" id="logoutBtn">
                Logout
              </button>
            </li>
          </ul>
        </div>
      `;
    } else {
      authArea.innerHTML = `
        <a href="auth.html" class="btn btn-primary nav-signin">
          Sign In
        </a>
      `;
    }

  });

  // ================= LOGOUT =================
  document.addEventListener("click", async (e) => {

    const logoutBtn = e.target.closest("#logoutBtn");

    if (logoutBtn) {
      try {
        await signOut(auth);

        // Smooth UX: no reload needed
        authArea.innerHTML = `
          <a href="auth.html" class="btn btn-primary nav-signin">
            Sign In
          </a>
        `;

        window.location.href = "index.html";

      } catch (error) {
        console.error("Logout error:", error);
        alert("Logout failed");
      }
    }

  });

});