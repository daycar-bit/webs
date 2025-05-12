function ajustarAltura() {
    const textoArea = document.getElementById('textoEntrada');
    // Ajustar la altura del textarea según el contenido
    textoArea.style.height = 'auto';  // Restablecer la altura
    textoArea.style.height = textoArea.scrollHeight + 'px';
  }
  
  function convertirAMayusculas() {
    const texto = document.getElementById('textoEntrada').value;
    const textoMayusculas = texto.toUpperCase();
    document.getElementById('resultado').innerText = textoMayusculas;
  }
  