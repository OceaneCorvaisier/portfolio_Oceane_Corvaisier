// Petite animation au scroll (optionnel)
window.addEventListener('scroll', () => {
    document.querySelector('header').style.opacity = 1 - window.scrollY / 600;
});
