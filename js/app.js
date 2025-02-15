document.getElementById("openModalRegister").addEventListener("click", function() {
    document.getElementById("modalContainerRegister").style.display = "flex";
    document.body.style.overflow = "hidden";
});
document.getElementById("nextModal").addEventListener("click", function(){
  document.getElementById("modalContainerRegister").style.display="none";
  document.getElementById("modalContainerPassword").style.display="flex";
})
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modalContainerPassword").style.display = "none";
    document.body.style.overflow = "auto";
});