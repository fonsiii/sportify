function togglePayment(type) {
    const cardForm = document.getElementById("card-form");
    const prepaidForm = document.getElementById("prepaid-form");
    const paypalForm = document.getElementById("paypal-form");
    const cardTab = document.getElementById("card-tab");
    const prepaidTab = document.getElementById("prepaid-tab");
    const paypalTab = document.getElementById("paypal-tab");

    cardForm.classList.add("hidden");
    prepaidForm.classList.add("hidden");
    paypalForm.classList.add("hidden");
    cardTab.classList.remove("active");
    prepaidTab.classList.remove("active");
    paypalTab.classList.remove("active");

    if (type === 'tarjeta') {
        cardForm.classList.remove("hidden");
        cardTab.classList.add("active");
    } else if (type === 'prepago') {
        prepaidForm.classList.remove("hidden");
        prepaidTab.classList.add("active");
    } else if (type === 'paypal') {
        paypalForm.classList.remove("hidden");
        paypalTab.classList.add("active");
    }
}

function redirectToPaypal() {
    window.open("https://www.paypal.com", "_blank", "noopener,noreferrer,width=600,height=600");
}
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modalContainerPago").style.display = "none";
    document.body.style.overflow = "auto";
    window.location.href = "../perfil.html";
  });