document.getElementById("nextModalPassword").addEventListener("click", function () {
  document.getElementById("modalContainerRegister").style.display = "none";
  document.getElementById("modalContainerPassword").style.display = "flex";
});

document.getElementById("nextModalDNI").addEventListener("click", function () {
  document.getElementById("modalContainerPassword").style.display = "none";
  document.getElementById("modalContainerDNI").style.display = "flex";
});

document.getElementById("nextModalSelfie").addEventListener("click", function () {
  document.getElementById("modalContainerDNI").style.display = "none";
  document.getElementById("modalContainerSelfie").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modalContainerSelfie").style.display = "none";
  document.body.style.overflow = "auto";
  window.location.href = "../home.html";
});
