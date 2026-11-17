const button = document.querySelector("#login");
const message = document.querySelector("#msg");

button.addEventListener("click", () => {
  button.disabled = true;
  button.textContent = "Cargando…";
  message.textContent = "Preparando tu inicio de sesión";

  setTimeout(() => {
    button.disabled = false;
    button.textContent = "Iniciar sesión";
    message.textContent = "Demo: conecta aquí tu autenticación real.";
  }, 1200);
});