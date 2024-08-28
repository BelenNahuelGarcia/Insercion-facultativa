const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const universidad = document.getElementById('universidad').value;

    // Aquí debes agregar la lógica para redireccionar al usuario al chat correspondiente
    // Por ejemplo:
    if (universidad === 'uba') {
        window.location.href = 'https://discord.gg/s4d9UnPg';
    } else if (universidad === 'utn') {
        // ...
    }

  
});