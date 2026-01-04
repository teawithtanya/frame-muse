let currentIndex = 0;
const photos = document.querySelectorAll('.photo-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');

function openLightbox(index) {
  currentIndex = index;
  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex >= photos.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = photos.length - 1;
  }
  updateLightboxContent();
}

function updateLightboxContent() {
  const photo = photos[currentIndex];
  const img = photo.querySelector('img');
  const title = photo.querySelector('h4').innerText;
  const desc = photo.querySelector('p').innerText;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxTitle.innerText = title;
  lightboxDesc.innerText = desc;
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') changeImage(-1);
  if (e.key === 'ArrowRight') changeImage(1);
});

// Swipe navigation
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchEndX < touchStartX - swipeThreshold) {
    changeImage(1); // Swipe Left -> Next
  }
  if (touchEndX > touchStartX + swipeThreshold) {
    changeImage(-1); // Swipe Right -> Prev
  }
}
