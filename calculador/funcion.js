// script.js
function calcularEdad() {
    const yearNacimiento = document.getElementById('birthYear').value;
    
    // Verificar que el campo no esté vacío y sea un número
    if (yearNacimiento && !isNaN(yearNacimiento)) {
        const yearActual = new Date().getFullYear(); // Obtener el año actual
        const edad = yearActual - yearNacimiento; // Calcular la edad
        
        // Mostrar el resultado en la página
        document.getElementById('resultado').innerHTML = `Tienes ${edad} años.`;
    } else {
        // Si no es un número o está vacío, mostrar un error
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa un año válido.';
    }
}
