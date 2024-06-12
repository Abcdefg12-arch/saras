 document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
       
        const jobTitle = document.getElementById('job-title');
    
        burger.addEventListener('click', () => {
        
        ;
    
        const urlParams = new URLSearchParams(window.location.search);
        const job = urlParams.get('job');
        if (job) {
            jobTitle.textContent = job;
        }
    });
    });
});
