document.addEventListener("DOMContentLoaded", function(){
    const progressBar = document.getElementById("progress-bar");
    const duration = 3000;
    const intervalTime = 50;
    const totalIntervals = duration / intervalTime;
    let currentInterval = 0;
    let progress = 0;
    
    const interval = setInterval(function(){
      currentInterval++;
      const intervalsLeft = totalIntervals - currentInterval;
      const maxIncrement = intervalsLeft > 0 ? (100 - progress) / intervalsLeft : (100 - progress);
      const increment = Math.random() * maxIncrement;
      progress += increment;
      if(progress >= 100 || currentInterval >= totalIntervals){
        progress = 100;
        progressBar.style.width = progress + "%";
        clearInterval(interval);
        setTimeout(() => {
          document.getElementById("loading-screen").style.display = "none";
        }, 500);
      } else {
        progressBar.style.width = progress + "%";
      }
    }, intervalTime);
});
