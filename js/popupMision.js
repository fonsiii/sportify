document.addEventListener('DOMContentLoaded', function() {
  function removeTrackedMission() {
    const tracked = document.getElementById('tracked-mission');
    if (tracked) {
      tracked.parentNode.removeChild(tracked);
    }
    localStorage.removeItem('trackedMission');
  }
  
  function createTrackedMissionFromData(missionData) {
    const existing = document.getElementById('tracked-mission');
    if (existing) {
      existing.parentNode.removeChild(existing);
    }
    const popup = document.createElement('div');
    popup.id = 'tracked-mission';
    popup.className = 'tracked-mission';
    
    const iconContainer = document.createElement('div');
    iconContainer.className = 'tracked-icon';
    iconContainer.innerHTML = missionData.iconHTML;
    
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'tracked-details';
    
    const titleEl = document.createElement('h3');
    titleEl.innerText = missionData.title;
    
    const descEl = document.createElement('p');
    descEl.innerText = missionData.description;
    
    const progressEl = document.createElement('p');
    progressEl.innerText = missionData.progress;
    
    const untrackBtn = document.createElement('button');
    untrackBtn.className = 'untrack-btn';
    untrackBtn.innerText = 'Destrackear';
    untrackBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      removeTrackedMission();
    });
    
    detailsContainer.appendChild(titleEl);
    detailsContainer.appendChild(descEl);
    detailsContainer.appendChild(progressEl);
    detailsContainer.appendChild(untrackBtn);
    
    popup.appendChild(iconContainer);
    popup.appendChild(detailsContainer);
    document.body.appendChild(popup);
  }
  
  const storedMission = localStorage.getItem('trackedMission');
  if (storedMission) {
    try {
      const missionData = JSON.parse(storedMission);
      createTrackedMissionFromData(missionData);
    } catch (e) {
      console.error(e);
    }
  }
  
  const missionCards = document.querySelectorAll('.mission-card');
  missionCards.forEach(function(card) {
    card.addEventListener('click', function() {
      const iconHTML = card.querySelector('.mission-icon').outerHTML;
      const title = card.querySelector('.mission-details h3').innerText;
      const description = card.querySelector('.mission-details p').innerText;
      const progress = card.querySelector('.mission-progress').innerText;
      const missionData = { iconHTML, title, description, progress };
      localStorage.setItem('trackedMission', JSON.stringify(missionData));
      createTrackedMissionFromData(missionData);
    });
  });
});
