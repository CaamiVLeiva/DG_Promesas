// 2. Función asíncrona para obtener los datos de la URL
async function fetchAlbums() {
    const url = 'https://jsonplaceholder.typicode.com/photos'; 

    // 3. Dentro de un bloque Try/Catch, utilizar fetch con await para recibir el valor directamente de la promesa
    try {
        const response = await fetch(url);
        const data = await response.json();

        // 4. Utilizar un método de iteración de arreglos para mostrar los primeros 20 títulos
        data.slice(0, 20).forEach(album => console.log(album.id + ".- " +album.title));
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// 5. Crear una función que retorne una promesa después de 3 segundos utilizando setTimeout
function enviarInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
}

// 6. Crear una función asíncrona que reciba el mensaje de la promesa creada y lo muestre en la consola
async function displayMessage() {
    const message = await enviarInfo();
    console.log(`%c${message}`, 'background-color: green; font-weight: bold;');
}

// Llamando las funciones
fetchAlbums();
displayMessage();
