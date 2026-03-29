document.getElementById("year").textContent = new Date().getFullYear();



document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Faith that moves you forward",
    "Growth that shapes your journey",
    "Purpose that defines your path"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  const speed = 60;
  const eraseSpeed = 40;
  const delayBetweenWords = 1500;
  const typewriter = document.getElementById("typewriter");

  function type() {
    if (charIndex < words[wordIndex].length) {
      typewriter.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriter.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
  }

  type();
});


  // Elegant reveal on scroll
document.addEventListener('DOMContentLoaded', function () {
  const points = document.querySelectorAll('.why-point');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.18 });

  points.forEach(point => observer.observe(point));
});



// Gentle scale + glow when active slide changes
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('#quoteCarousel');
  if (carousel) {
    carousel.addEventListener('slid.bs.carousel', function () {
      // Optional: add class for extra glow on active
      document.querySelectorAll('.quote-card').forEach(card => {
        card.classList.remove('active-glow');
      });
      const activeCard = carousel.querySelector('.carousel-item.active .quote-card');
      if (activeCard) activeCard.classList.add('active-glow');
    });
  }
});





// Quick View Modal population + form validation
const quickViewModal = document.getElementById('quickViewModal');
const addToCartBtn = document.getElementById('addToCartBtn');

const customerName = document.getElementById('customerName');
const customerEmail = document.getElementById('customerEmail');

quickViewModal.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const title  = button.getAttribute('data-title');
  const price  = button.getAttribute('data-price');
  const desc   = button.getAttribute('data-desc');

 
  document.getElementById('modalBookTitle').textContent = title;
  document.getElementById('modalBookPrice').textContent = price;
  document.getElementById('modalBookDesc').textContent = desc;

  // Reset form and buttons on each modal open
  customerName.value = '';
  customerEmail.value = '';
  addToCartBtn.disabled = true;
  buyNowBtn.disabled = true;
  addToCartBtn.classList.add('disabled');
 
});

// Enable buttons only when both fields are filled
function checkForm() {
  const isFilled = customerName.value.trim() !== '' && customerEmail.value.trim() !== '';
  addToCartBtn.disabled = !isFilled;
  if (isFilled) {
    addToCartBtn.classList.remove('disabled');
  } else {
    addToCartBtn.classList.add('disabled');
 
  }
}

customerName.addEventListener('input', checkForm);
customerEmail.addEventListener('input', checkForm);

// Optional: handle form submit / actual purchase (placeholder)
document.getElementById('purchaseForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // Here you would normally send data to server (name + email + book info)
  alert('Purchase initiated for ' + document.getElementById('modalBookTitle').textContent);
});

// Load More remains the same as before (or your existing version)





