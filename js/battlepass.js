class Carousel {
  constructor(carouselSelector) {
    this.carousel = document.querySelector(carouselSelector);
    this.slides = this.carousel.querySelectorAll('.carousel-item');
    this.currentSlide = 0;
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.animationID = 0;
    this.bindEvents();
  }

  bindEvents() {
    this.carousel.addEventListener('mousedown', this.touchStart.bind(this));
    this.carousel.addEventListener('mousemove', this.touchMove.bind(this));
    this.carousel.addEventListener('mouseup', this.touchEnd.bind(this));
    this.carousel.addEventListener('mouseleave', this.touchEnd.bind(this));

    this.carousel.addEventListener('touchstart', this.touchStart.bind(this));
    this.carousel.addEventListener('touchmove', this.touchMove.bind(this));
    this.carousel.addEventListener('touchend', this.touchEnd.bind(this));

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      this.prevSlide();
    } else if (event.key === "ArrowRight") {
      this.nextSlide();
    }
  }

  touchStart(event) {
    this.isDragging = true;
    this.startX = this.getPositionX(event);
    this.carousel.classList.add('dragging');
    this.carousel.style.transition = 'none';
    cancelAnimationFrame(this.animationID);
  }

  touchMove(event) {
    if (!this.isDragging) return;
    const currentPosition = this.getPositionX(event);
    const diff = currentPosition - this.startX;
    this.currentTranslate = this.prevTranslate + diff;
    this.setSliderPosition();
  }

  touchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.carousel.classList.remove('dragging');
    const movedBy = this.currentTranslate - this.prevTranslate;
    if (movedBy < -100 && this.currentSlide < this.slides.length - 1) {
      this.currentSlide += 1;
    }
    if (movedBy > 100 && this.currentSlide > 0) {
      this.currentSlide -= 1;
    }
    this.setPositionByIndex();
  }

  getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }

  setSliderPosition() {
    this.carousel.style.transform = `translateX(${this.currentTranslate}px)`;
  }

  setPositionByIndex() {
    this.currentTranslate = this.currentSlide * -this.carousel.offsetWidth;
    this.prevTranslate = this.currentTranslate;
    this.carousel.style.transition = 'transform 0.3s ease';
    this.setSliderPosition();
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  showSlide(index) {
    if (index < 0) {
      this.currentSlide = this.slides.length - 1;
    } else if (index >= this.slides.length) {
      this.currentSlide = 0;
    } else {
      this.currentSlide = index;
    }
    this.setPositionByIndex();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.carousel = new Carousel('.carousel');
});
