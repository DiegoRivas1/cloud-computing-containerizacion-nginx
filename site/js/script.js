// Laboratorio 2 - Cloud Computing
// Datos del estudiante (edita este objeto con tus datos reales)
const STUDENT = {
  grupo: "___", // TODO: reemplazar por el nombre/número real del grupo de laboratorio
};

document.addEventListener("DOMContentLoaded", () => {
  const grupoEl = document.getElementById("grupo");
  if (grupoEl) grupoEl.textContent = STUDENT.grupo;

  const statusText = document.getElementById("status-text");
  if (statusText) {
    const now = new Date();
    statusText.textContent =
      "Servido por Nginx dentro de un contenedor Docker · cargado " +
      now.toLocaleString();
  }

  drawSky();
});

// Fondo decorativo: pequeños puntos flotando, simulando "nodos" en red
function drawSky() {
  const container = document.getElementById("sky");
  if (!container) return;

  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  container.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const NODE_COUNT = 40;
  const nodes = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.8 + 0.6,
  }));

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(94, 234, 212, 0.35)";
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  tick();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
