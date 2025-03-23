// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize scroll progress
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    gsap.to(progressBar, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });
}

// Rest of the JavaScript content