  tsParticles.load("tsparticles", {
    background: {
      color: {
        value: "#000000", // Fondo negro puro para contraste
      },
    },
    fpsLimit: 60, // Limitamos a 60 para asegurar rendimiento
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" }, // Cambiado a 'grab' para conectar con el mouse
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 140, links: { opacity: 1 } }
      },
    },
    particles: {
      color: {
        value: "#ffffff", // ASTERISCOS BLANCOS
      },
      links: {
        color: "#ffffff", // LÍNEAS BLANCAS
        distance: 150,
        enable: true,
        opacity: 0.2, // Líneas más sutiles para que destaquen los asteriscos
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1, // Movimiento más lento y elegante
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60, // Cantidad de asteriscos
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "char", // IMPORTANTE: Tipo carácter
        options: {
          char: {
            value: "*", // El símbolo
            font: "Times New Roman", // La fuente que pediste
            style: "",
            weight: "400",
            fill: true
          }
        }
      },
      size: {
        value: { min: 10, max: 20 }, // Tamaño aumentado para que se vea bien la fuente
      },
    },
    detectRetina: true,
  });