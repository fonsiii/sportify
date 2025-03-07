document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.mission-tab');
    const sections = document.querySelectorAll('.mission-section');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
  
        tab.classList.add('active');
        const target = tab.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Función para remover el pop-up y limpiar el almacenamiento
    function removeTrackedMission() {
      const tracked = document.getElementById('tracked-mission');
      if (tracked) {
        tracked.parentNode.removeChild(tracked);
      }
      localStorage.removeItem('trackedMission');
    }
  
    // Función que crea el pop-up usando datos de misión (ya sea desde la tarjeta o el storage)
    function createTrackedMissionFromData(missionData) {
      // Eliminar pop-up anterior, si existe
      const existing = document.getElementById('tracked-mission');
      if (existing) {
        existing.parentNode.removeChild(existing);
      }
  
      // Crear el contenedor del pop-up
      const popup = document.createElement('div');
      popup.id = 'tracked-mission';
      popup.className = 'tracked-mission';
  
      // Contenedor del ícono
      const iconContainer = document.createElement('div');
      iconContainer.className = 'tracked-icon';
      iconContainer.innerHTML = missionData.iconHTML;
  
      // Contenedor de detalles
      const detailsContainer = document.createElement('div');
      detailsContainer.className = 'tracked-details';
  
      const titleEl = document.createElement('h3');
      titleEl.innerText = missionData.title;
  
      const descEl = document.createElement('p');
      descEl.innerText = missionData.description;
  
      const progressEl = document.createElement('p');
      progressEl.innerText = missionData.progress;
  
      // Botón para destrackear la misión
      const untrackBtn = document.createElement('button');
      untrackBtn.className = 'untrack-btn';
      untrackBtn.innerText = 'Destrackear';
      untrackBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        removeTrackedMission();
      });
  
      // Construir la estructura del pop-up
      detailsContainer.appendChild(titleEl);
      detailsContainer.appendChild(descEl);
      detailsContainer.appendChild(progressEl);
      detailsContainer.appendChild(untrackBtn);
  
      popup.appendChild(iconContainer);
      popup.appendChild(detailsContainer);
  
      // Agregar el pop-up al body
      document.body.appendChild(popup);
    }
  
    // Función para trackear una misión a partir de la tarjeta clickeada
    function createTrackedMission(missionCard) {
      // Extraer datos de la tarjeta de misión
      const iconHTML = missionCard.querySelector('.mission-icon').outerHTML;
      const title = missionCard.querySelector('.mission-details h3').innerText;
      const description = missionCard.querySelector('.mission-details p').innerText;
      const progress = missionCard.querySelector('.mission-progress').innerText;
  
      // Estructurar los datos de la misión
      const missionData = { iconHTML, title, description, progress };
  
      // Guardar la misión trackeada en localStorage para persistirla en la navegación
      localStorage.setItem('trackedMission', JSON.stringify(missionData));
  
      // Crear (o actualizar) el pop-up
      createTrackedMissionFromData(missionData);
    }
  
    // Al cargar la página, si hay una misión trackeada en el localStorage, se muestra el pop-up
    const storedMission = localStorage.getItem('trackedMission');
    if (storedMission) {
      try {
        const missionData = JSON.parse(storedMission);
        createTrackedMissionFromData(missionData);
      } catch (e) {
        console.error("Error al procesar los datos de la misión trackeada", e);
      }
    }
  
    // Asignar el evento click a todas las tarjetas de misión para trackearlas
    const missionCards = document.querySelectorAll('.mission-card');
    missionCards.forEach(function(card) {
      card.addEventListener('click', function() {
        createTrackedMission(card);
      });
    });
  });
  