function abrirCarta(event) {
  event.stopPropagation(); // Evita que se dispare en otros elementos
  document.getElementById('envelope').classList.toggle('abierta');
}

