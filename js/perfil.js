document
.getElementById("openModalNotificaciones")
.addEventListener("click", function () {
  document.getElementById(
    "modalContainerNotificaciones"
  ).style.display = "flex";
  document.body.style.overflow = "hidden";
});
document
.getElementById("modalContainerNotificaciones")
.addEventListener("click", function (event) {
  if (event.target === this) {
    document.getElementById(
      "modalContainerNotificaciones"
    ).style.display = "none";
    document.body.style.overflow = "auto";
  }
});

document.getElementById("openModalSaldo").addEventListener("click", function () {
  window.location.href = "modales/saldo.html";
});
