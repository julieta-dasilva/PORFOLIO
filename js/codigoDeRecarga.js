const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        form.reset();
    }
});



