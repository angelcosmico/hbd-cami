const items = ['🎵', '📚', '🌶️', '🎶', '📖', '🏎️', '🏎️💨'];

function revealDetails(event) {
  const messageBox = document.getElementById('messageBox');
  const btn = document.getElementById('triggerBtn');
  
  messageBox.style.display = 'block';
  btn.style.display = 'none';

  // Generar destellos visuales (notas, libros, salsa, F1)
  for (let i = 0; i < 18; i++) {
    createFloatingElement(event.clientX, event.clientY);
  }
}

function createFloatingElement(x, y) {
  const el = document.createElement('div');
  el.className = 'floating-item';
  
  // Selecciona un icono al azar
  el.innerText = items[Math.floor(Math.random() * items.length)];
  
  // Variación en la posición inicial alrededor del clic
  const offsetX = (Math.random() - 0.5) * 160;
  const offsetY = (Math.random() - 0.5) * 80;
  
  el.style.left = `${x + offsetX}px`;
  el.style.top = `${y + offsetY}px`;
  
  document.body.appendChild(el);
  
  setTimeout(() => {
    el.remove();
  }, 2500);
}
