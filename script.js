document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const items = document.querySelectorAll('.project-item');
    const n = items.length;
    const angleStep = 360 / n;
    
    // Calcul du rayon pour que les cartes soient bien espacées
    const radius = 450; 

    // Étape 1 : On place les cartes en cercle au démarrage
    items.forEach((item, i) => {
        item.style.transform = `rotateY(${i * angleStep}deg) translateZ(${radius}px)`;
    });

    // Étape 2 : On fait tourner la roue quand on scrolle
    window.addEventListener('scroll', () => {
        // On récupère la position du scroll par rapport à la section
        const section = document.querySelector('.wheel-section');
        const sectionTop = section.offsetTop;
        const relativeScroll = window.scrollY - sectionTop;

        if (relativeScroll > 0) {
            const rotation = relativeScroll / 4; // Vitesse de rotation
            wheel.style.transform = `rotateY(${-rotation}deg)`;
        }
    });
});