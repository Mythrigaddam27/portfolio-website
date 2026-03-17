document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href').startsWith("#")){
                e.preventDefault();
                document.querySelector(this.getAttribute('href'))
                    .scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dark mode toggle
    const toggleBtn = document.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            toggleBtn.innerText = "☀️";
        } else {
            toggleBtn.innerText = "🌙";
        }
    });

    // Scroll animation
    const sections = document.querySelectorAll("section");

    const reveal = () => {
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if(top < window.innerHeight - 100){
                sec.style.opacity = "1";
                sec.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", reveal);
    reveal();

});