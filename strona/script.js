const form = document.querySelector('form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    successMessage.style.display = 'block';
    form.reset();
});
