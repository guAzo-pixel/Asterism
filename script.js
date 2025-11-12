document.addEventListener("DOMContentLoaded", () => {
  const plataformas = ["YouTube", "Instagram", "TikTok"];
  const frase = document.getElementById("frase");
  let indice = 0;

  setInterval(() => {
    // Desvanecer la frase completa
    frase.style.opacity = 0;

    setTimeout(() => {
      // Cambiar la plataforma
      indice = (indice + 1) % plataformas.length;
      frase.innerHTML = `¿Cansado de <span class="red">${plataformas[indice]}</span>?`;
      // Reaparecer
      frase.style.opacity = 1;
    }, 500); // coincide con la duración de la transición
  }, 5000);
});