document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const switchToRegister = document.getElementById("switchToRegister");
  const switchToLogin = document.getElementById("switchToLogin");
  const accountItem = document.getElementById("accountItem");
  const loginModalElement = document.getElementById("loginModal");
  const loginModal = new bootstrap.Modal(loginModalElement);
  const successToast = new bootstrap.Toast(document.getElementById("successToast"));
  const toastMessage = document.getElementById("toastMessage");
  const exploreButton = document.querySelector(".button_slide");

  console.log("fichero.js cargado correctamente");

  function showAccountIcon() {
    if (accountItem) {
      accountItem.style.display = "block";
    }
  }

  function showSuccessMessage(message) {
    toastMessage.textContent = message;
    successToast.show();
  }

  function closeLoginModal() {
    loginModal.hide();
    document.body.classList.remove("modal-open");
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showAccountIcon();
      showSuccessMessage("Inicio de sesión completado con éxito");
      closeLoginModal();
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showAccountIcon();
      showSuccessMessage("Registro completado con éxito");
      closeLoginModal();
    });
  }

  const googleLoginButton = document.querySelector("#googleLoginButton");
  if (googleLoginButton) {
    googleLoginButton.addEventListener("click", function (e) {
      e.preventDefault();
      showAccountIcon();
      showSuccessMessage("Inicio de sesión con Google completado con éxito");
      closeLoginModal();
    });
  }

  const facebookLoginButton = document.querySelector("#facebookLoginButton");
  if (facebookLoginButton) {
    facebookLoginButton.addEventListener("click", function (e) {
      e.preventDefault();
      showAccountIcon();
      showSuccessMessage("Inicio de sesión con Facebook completado con éxito");
      closeLoginModal();
    });
  }

  if (switchToRegister && switchToLogin) {
    switchToRegister.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });

    switchToLogin.addEventListener("click", function (e) {
      e.preventDefault();
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }

  if (exploreButton) {
    exploreButton.addEventListener("click", function (e) {
      console.log("Botón de Explorar Colección clickeado");
    });
  }

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("button_slide")) {
      console.log("Navegando a productosPrincipal.html");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const accountIcon = document.getElementById("accountIcon");
  const profileModal = new bootstrap.Modal(document.getElementById("profileModal"));

  if (accountIcon) {
    accountIcon.addEventListener("click", function (e) {
      e.preventDefault();
      profileModal.show();
    });
  }
});
