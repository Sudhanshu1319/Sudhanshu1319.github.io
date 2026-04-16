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

  // --- 3. Card Mouse Track Glow (Optional but adds premium feel) ---
  const cards = document.querySelectorAll('.glass-card');
  document.addEventListener('mousemove', e => {
    for(const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  });
  
  // Note: To use the mouse track glow, we need to add a specialized background in CSS.
  // We'll stick to the base glassmorphism for now, but the values are tracked here
  // if you want to extend it with pseudo-elements later!
});