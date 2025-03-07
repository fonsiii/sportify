document.getElementById("openModalRegister").addEventListener("click", function () {
  window.location.href = "modales/registro.html";
});

document.getElementById("userIcon").addEventListener("click", function () {
  window.location.href = "./perfil.html";
});

const chatbotIcon = document.getElementById("chatbotIcon");
const chatbotInterface = document.getElementById("chatbotInterface");
const closeChatbot = document.getElementById("closeChatbot");

chatbotIcon.addEventListener("click", function (event) {
  event.stopPropagation();
  chatbotInterface.style.opacity = "1";
  chatbotInterface.style.transform = "scale(1)";
  chatbotInterface.style.pointerEvents = "auto";
});

closeChatbot.addEventListener("click", function (event) {
  event.stopPropagation();
  chatbotInterface.style.opacity = "0";
  chatbotInterface.style.transform = "scale(0.8)";
  chatbotInterface.style.pointerEvents = "none";
});

document.addEventListener("click", function (event) {
  if (!chatbotInterface.contains(event.target) && event.target.id !== "chatbotIcon") {
    chatbotInterface.style.opacity = "0";
    chatbotInterface.style.transform = "scale(0.8)";
    chatbotInterface.style.pointerEvents = "none";
  }
});

document.getElementById("chatForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const chatInput = document.getElementById("chatInput");
  const message = chatInput.value.trim();
  
  if (message !== "") {
    const chatMessages = document.getElementById("chatMessages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("bg-gray-200", "text-gray-800", "p-2", "rounded", "self-end");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
