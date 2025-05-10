document.addEventListener('DOMContentLoaded', function () {
  const heart = document.getElementById('heart');
  const envelope = document.getElementById('envelope');

  heart.addEventListener('click', function (e) {
    e.stopPropagation();
    envelope.classList.toggle('abierta');
  });
});

