document.getElementById("currentYear").textContent = new Date().getFullYear();

// Bouton pour remonter en haut de la page
const remonterBtn = document.getElementById('remonter');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    remonterBtn.classList.add('show');
  } else {
    remonterBtn.classList.remove('show');
  }
};

remonterBtn.addEventListener('click', function() {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour les autres navigateurs
});