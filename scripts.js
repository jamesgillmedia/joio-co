<script>
window.addEventListener('DOMContentLoaded', (event) => {
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        // Scroll down slightly
        window.scrollTo({
            top: 100, // adjust this value to control how far you scroll
            behavior: 'smooth'
        });

        // Scroll back up after a delay
        setTimeout(function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1000); // adjust this value to control how long before it scrolls back up
    }

    const title = document.getElementById('title');
    title.addEventListener('mouseover', function() {
      this.textContent = 'JOIO CO';
    });
    title.addEventListener('mouseout', function() {
      this.textContent = 'joio.co';
    });

    const footerTitle = document.getElementById('footer-title');
    footerTitle.addEventListener('mouseover', function() {
      this.textContent = 'JOIO CO';
    });
    footerTitle.addEventListener('mouseout', function() {
      this.textContent = 'joio.co';
    });
});
</script>
