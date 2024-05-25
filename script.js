document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('newsletter-message').textContent = `Obrigado por se inscrever, ${email}!`;
    document.getElementById('newsletter-form').reset();
});
