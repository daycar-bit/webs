function toggleFAQ() {
    const faqSection = document.getElementById('faq');
    if (faqSection.classList.contains('show')) {
        faqSection.classList.remove('show');
        document.getElementById('faqButton').innerText = 'Mostrar preguntas frecuentes';
    } else {
        faqSection.classList.add('show');
        document.getElementById('faqButton').innerText = 'Ocultar preguntas frecuentes';
    }
}




