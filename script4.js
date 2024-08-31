const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const universidad = document.getElementById('universidad').value;

    // Aquí debes agregar la lógica para redireccionar al usuario al chat correspondiente
    // Por ejemplo:
    if (universidad === 'uba') {
        window.location.href = 'https://discord.gg/s4d9UnPg';
    } else if (universidad === 'utn') {
        window.location.href = 'https://discord.gg/uzR9tPjy';
    } else if (universidad === 'unlam') {
        window.location.href = 'https://discord.gg/3QyH3jcV' ;
    } else if (universidad === 'unlp') {
        window.location.href = 'https://discord.gg/T4t2pSXt' ;
    } else if (universidad === 'unsam') {
        window.location.href = 'https://discord.gg/E4k5TQeS' ;
    } else if (universidad === 'una')   {
        window.location.href = 'https://discord.gg/F4VBUbNN';
    }

  
});