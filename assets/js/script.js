// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Galeria Interativa
    document.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', function() {
            const modalContent = this.innerHTML;
            // Abrir modal com conteúdo expandido
        });
    });

    // Ativar tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Smooth Scroll entre as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal para Galeria de Imagens
document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', function () {
        const modalContent = this.innerHTML; // Adicione lógica para exibir imagem em modal.
        alert('Imagem clicada!'); // Substitua por funcionalidade real.
    });
});
