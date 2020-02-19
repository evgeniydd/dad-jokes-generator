document.getElementById('get-joke').addEventListener('click', getData);

function getData() {
  fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => (document.getElementById('output').innerHTML = data.joke));
}

getData();
