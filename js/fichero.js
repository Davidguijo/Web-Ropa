document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const switchToRegister = document.getElementById("switchToRegister");
  const switchToLogin = document.getElementById("switchToLogin");
  const accountItem = document.getElementById("accountItem");
  const loginModalElement = document.getElementById("loginModal"); // Elemento del modal
  const loginModal = new bootstrap.Modal(loginModalElement); // Instancia del modal
  const successToast = new bootstrap.Toast(document.getElementById("successToast"));
  const toastMessage = document.getElementById("toastMessage");

  console.log("fichero.js cargado correctamente");

  // Función para mostrar el ícono de cuenta
  function showAccountIcon() {
    if (accountItem) {
      accountItem.style.display = "block";
    }
  }

  // Función para mostrar un mensaje de éxito
  function showSuccessMessage(message) {
    toastMessage.textContent = message; // Cambia el mensaje
    successToast.show(); // Muestra el Toast
  }

  // Función para cerrar el modal y eliminar el backdrop
  function closeLoginModal() {
    loginModal.hide(); // Cierra el modal
    document.body.classList.remove("modal-open"); // Elimina la clase que bloquea el scroll
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove(); // Elimina el backdrop
    }
  }

  // Evento para el botón de iniciar sesión
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Aquí iría la lógica de autenticación
      showAccountIcon();
      showSuccessMessage("Inicio de sesión completado con éxito");
      closeLoginModal(); // Cierra el modal correctamente
    });
  }

  // Evento para el botón de registrarse
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Aquí iría la lógica de registro
      showAccountIcon();
      showSuccessMessage("Registro completado con éxito");
      closeLoginModal(); // Cierra el modal correctamente
    });
  }

  // Evento para el botón de iniciar sesión con Google
  const googleLoginButton = document.querySelector(".btn-danger");
  if (googleLoginButton) {
    googleLoginButton.addEventListener("click", function (e) {
      e.preventDefault();
      // Aquí iría la lógica de autenticación con Google
      showAccountIcon();
      showSuccessMessage("Inicio de sesión con Google completado con éxito");
      closeLoginModal(); // Cierra el modal correctamente
    });
  }

  // Evento para el botón de iniciar sesión con Facebook
  const facebookLoginButton = document.querySelector(".btn-primary");
  if (facebookLoginButton) {
    facebookLoginButton.addEventListener("click", function (e) {
      e.preventDefault();
      // Aquí iría la lógica de autenticación con Facebook
      showAccountIcon();
      showSuccessMessage("Inicio de sesión con Facebook completado con éxito");
      closeLoginModal(); // Cierra el modal correctamente
    });
  }

  // Alternar entre formularios de inicio de sesión y registro
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
});

document.addEventListener("DOMContentLoaded", function () {
  const accountIcon = document.getElementById("accountIcon");

  if (accountIcon) {
    accountIcon.addEventListener("click", function (e) {
      e.preventDefault();
      const profileModal = new bootstrap.Modal(document.getElementById("profileModal"));
      profileModal.show(); // Abre el modal de perfil
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const accountIcon = document.getElementById("accountIcon");
  const profileModal = new bootstrap.Modal(document.getElementById("profileModal"));

  // Evento para abrir el modal de perfil al hacer clic en la imagen
  if (accountIcon) {
    accountIcon.addEventListener("click", function (e) {
      e.preventDefault();
      profileModal.show(); // Abre el modal de perfil
    });
  }
});

// Función para mostrar un mensaje de éxito
document.addEventListener("DOMContentLoaded", function () {
  const successToastElement = document.getElementById("successToast");
  const successToast = new bootstrap.Toast(successToastElement, {
    autohide: true, // Cierra automáticamente el Toast
    delay: 3000, // Duración en milisegundos (3 segundos)
  });

  // Función para mostrar un mensaje de éxito
  function showSuccessMessage(message) {
    const toastMessage = document.getElementById("toastMessage");
    toastMessage.textContent = message; // Cambia el mensaje
    successToast.show(); // Muestra el Toast
  }

  // Ejemplo de uso (en el evento de inicio de sesión)
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showSuccessMessage("Inicio de sesión completado con éxito");
    });
  }
});