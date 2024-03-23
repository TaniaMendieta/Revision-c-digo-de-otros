/* const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError); */

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Corregimos selector de clase .name
const $n = document.querySelector('.name');
// Cambiamos el selector de #blog a .blog para coincidir con la clase en el HTML
const $b = document.querySelector('.blog');
// Cambiamos el selector de .location a #location para coincidir con el elemento agregado en el HTML
const $l = document.querySelector('#location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // creamos data para que nos arroje los datos
  const data = await response.json();
  console.log(data);
  // Corregimos la interpolación con ``
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Corregimos la referencia a n por $n para seleccionar el elemento correcto
  $n.textContent = `Algo salió mal: ${err}`;
}

//try-catch para manejar errores 
try {
  displayUser('stolinski');
} catch (error) {
  handleError(error);
}
