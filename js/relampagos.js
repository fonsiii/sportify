function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 30 + 20;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    star.style.left = `${xPos}px`;
    star.style.top = `${yPos}px`;

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);
}

setInterval(createStar, Math.random() * 300);
