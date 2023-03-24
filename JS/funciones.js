/**

const emailBtn = document.getElementById('email');
const email = document.getElementById('bemail');

emailBtn.addEventListener('click', function() {
  if (email.style.display === 'none') {
    email.style.display = 'block';
    emailBtn.textContent = 'Ocultar Email';
  } else {
    email.style.display = 'none';
    emailBtn.textContent = 'Mostrar Emails';
  }
});

Al revisar esta zona, note que solo funcionaba en una sola instancia, probe haciendolo con un while y do while pero genero un bucle infinito. */