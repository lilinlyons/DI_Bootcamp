const search = document.getElementsByClassName('btn signin')[0];

const form = document.getElementById('signin');
const errorMessageDiv = document.getElementById('error-message');

search.addEventListener('click', async (event) => {
    event.preventDefault()

    errorMessageDiv.textContent = '';

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });


    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const result = await response.json();

        errorMessageDiv.textContent = 'Welcome, registration successful!';
        errorMessageDiv.style.color = 'green';
    } catch (error) {
        console.error('Error:', error);
        errorMessageDiv.textContent = error.message;
        errorMessageDiv.style.color = 'red';
    }
});

