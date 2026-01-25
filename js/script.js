document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica de Rotación de Frases ---
  const plataformas = ["YouTube", "Instagram", "TikTok"];
  const frase = document.getElementById("frase");
  let indice = 0;

  if (frase) {
    setInterval(() => {
      frase.style.opacity = 0;
      setTimeout(() => {
        indice = (indice + 1) % plataformas.length;
        frase.innerHTML = `¿Cansado de <span class="red">${plataformas[indice]}</span>?`;
        frase.style.opacity = 1;
      }, 500);
    }, 5000);
  }

  // --- Lógica de Contadores Animados ---
  const counters = document.querySelectorAll('.porcent');
  
  const animateCounter = (counter) => {
    const target = parseFloat(counter.getAttribute('data-value'));
    let current = 0;
    const duration = 2000; // 2 segundos
    const frameRate = 40;
    const totalFrames = duration / frameRate;
    const increment = target / totalFrames;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toFixed(2) + '%';
        clearInterval(interval);
      } else {
        counter.textContent = current.toFixed(2) + '%';
      }
    }, frameRate);
  };

  const observerOptions = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
});