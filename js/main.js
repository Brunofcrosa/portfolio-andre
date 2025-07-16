document.addEventListener('DOMContentLoaded', function() {
    const mainNavbar = document.getElementById('mainNavbar');
    if (mainNavbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                mainNavbar.classList.add('navbar-scrolled');
                mainNavbar.classList.remove('py-4'); 
                mainNavbar.classList.add('py-3'); 
            } else {
                mainNavbar.classList.remove('navbar-scrolled');
                mainNavbar.classList.remove('py-3'); 
                mainNavbar.classList.add('py-4'); 
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
    }

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});