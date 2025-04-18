// Optional: You can add staggered animation for each photo
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img, i) => {
    setTimeout(() => {
      img.style.opacity = "1";
    }, 300 * i); // Stagger by 300ms
  });
});

document.getElementById('main-heart').addEventListener('click', function () {
  const heart = this;

  // Add vibration animation
  heart.style.animation = 'vibrate 0.3s ease-in-out';
  setTimeout(() => {
    heart.style.animation = '';
  }, 300);

  // Generate small hearts
  for (let i = 0; i < 10; i++) {
    const smallHeart = document.createElement('div');
    smallHeart.classList.add('small-heart');
    smallHeart.style.left = `${Math.random() * 50}px`;
    smallHeart.style.bottom = `${Math.random() * 50}px`;
    heart.parentElement.appendChild(smallHeart);

    // Remove the small heart after animation ends
    smallHeart.addEventListener('animationend', () => {
      smallHeart.remove();
    });
  }

  // Generate falling hearts
  for (let i = 0; i < 20; i++) {
    const fallingHeart = document.createElement('div');
    fallingHeart.classList.add('falling-heart');

    // Randomize the starting position
    fallingHeart.style.left = `${Math.random() * 100}vw`;
    fallingHeart.style.animationDelay = `${Math.random() * 2}s`;
    fallingHeart.style.animationDuration = `${3 + Math.random() * 2}s`;

    document.body.appendChild(fallingHeart);

    // Remove the heart after the animation ends
    fallingHeart.addEventListener('animationend', () => {
      fallingHeart.remove();
    });
  }
});

// Floating hearts generator
const heartContainer = document.querySelector('.floating-hearts');

setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 500);

