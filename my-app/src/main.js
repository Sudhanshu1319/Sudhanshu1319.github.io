import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // --- 2. Typewriter Effect ---
  const typeWriterElement = document.querySelector('.typewriter');
  if (typeWriterElement) {
    const text = typeWriterElement.textContent;
    typeWriterElement.textContent = '';
    
    let i = 0;
    const typeSpeed = 50; // ms per character

    function typeWriter() {
      if (i < text.length) {
        typeWriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, typeSpeed);
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
  }

  // --- 3. 3D Tilt Effect on Cards ---
  const cards = document.querySelectorAll('.glass-card');
  const maxTilt = 14; // degrees

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -maxTilt;
      const rotateY = ((x / rect.width) - 0.5) * maxTilt;

      card.style.transform = `perspective(700px) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});