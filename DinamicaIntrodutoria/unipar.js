const apiUrl = 'https://b3c5-177-91-39-198.ngrok-free.app/api/user';

fetch(apiUrl, {
    method: 'GET',
    headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log('Data received:', data);
    document.getElementById('name').textContent = data.name;
    document.getElementById('age').textContent = data.age;
    document.getElementById('aboutme').textContent = data.aboutme;
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});