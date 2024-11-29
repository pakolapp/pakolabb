// Controlla se il cookie è già stato accettato
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'block';
}

// Quando l'utente accetta i cookie
document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', true); // Salva accettazione nel localStorage
    document.getElementById('cookie-banner').style.display = 'none'; // Nascondi banner
});
