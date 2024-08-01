window.addEventListener('load', () => {
  const animatedLeftImgs = document.querySelectorAll('.animated-left-img');
  animatedLeftImgs.forEach(el => {
    el.classList.remove('left-start');
    el.classList.add('translateX-end');
  });

  const animatedRightImg = document.querySelector('.animated-right-img');
  if (animatedRightImg) {
    animatedRightImg.classList.remove('right-start');
    animatedRightImg.classList.add('translateX-end');
  }

  const animatedTopImg = document.querySelector('.animated-top-img');
  if (animatedTopImg) {
    animatedTopImg.classList.add('top-start');
    animatedTopImg.classList.add('translateY-end');
  }
});