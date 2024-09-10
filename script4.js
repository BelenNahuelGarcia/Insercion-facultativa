const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const universidad = document.getElementById('universidad').value;

    // Aquí debes agregar la lógica para redireccionar al usuario al chat correspondiente
    // Por ejemplo:
    if (universidad === 'uba') {
        window.location.href = 'https://discord.gg/DCCHakMMsh';
    } else if (universidad === 'utn') {
        window.location.href = 'https://discord.gg/DHSUU5gdxQ';
    } else if (universidad === 'unlam') {
        window.location.href = 'https://discord.gg/ydrvJkkKFv' ;
    } else if (universidad === 'unlp') {
        window.location.href = 'https://discord.gg/k6VdHyQeyX' ;
    } else if (universidad === 'unsam') {
        window.location.href = 'https://discord.gg/GJZHUZdUJ6' ;
    } else if (universidad === 'una')   {
        window.location.href = 'https://discord.gg/r4djxKJrsN';
    }

  
});