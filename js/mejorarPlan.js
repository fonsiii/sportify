function openModal() {
    document.getElementById("purchaseModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("purchaseModal").style.display = "none";
  }
  
  function buyOption1() {
    alert("Opción standard comprada");
    closeModal();
  }
  
  function buyOption2() {
    alert("Opción premium comprada");
    closeModal();
  }
  
  window.onclick = function (event) {
    var modal = document.getElementById("purchaseModal");
    if (event.target == modal) {
      closeModal();
    }
  };
  