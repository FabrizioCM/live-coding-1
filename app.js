// Escribe tu código aquí.
// Defino los arrays
let myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'pera', 'sandia', 'guanabana', 'gato'];
let bigWords = ['bocina', 'gato'];

function palabrasGrandesBuscar(myArray, bigWords) {
    // Filtro el array con filter y le digo que si es mayor al contenido de bigWords en los índices 0 y 1 lo muestre
    const Encontrado = myArray.filter(word => word.length > bigWords[0].length && word.length > bigWords[1].length);
    return Encontrado;
}

// Llamo a mi función con la constante resultado y la imprimo con el console log
const resultado = palabrasGrandesBuscar(myArray, bigWords);
console.log(resultado);

// Función para manipular el DOM
function imprimirHTML(resultado) {
    const ul = document.querySelector('ul'); // Creo el elemento ul y lo saco del index
    //Para cada palabra qcreo un elemento de lista
    resultado.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        ul.appendChild(li);
    });
    //Creo el elemento hijo
    document.body.appendChild(ul);
}

// Llamo a la función imprimirHTML con el resultado
imprimirHTML(resultado);