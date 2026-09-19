// Interacción para el botón de contacto
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contact-btn');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            // Animación sencilla al hacer clic
            contactBtn.textContent = '¡Gracias!';
            contactBtn.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                contactBtn.style.transform = 'scale(1)';
                contactBtn.textContent = 'Contactar';
                
                // Aquí podrías abrir un modal, un cliente de correo, etc.
                alert('¡Gracias por tu interés! Próximamente se implementará el formulario de contacto.');
            }, 500);
        });
    }

    // Smooth scrolling para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
