/**
 * Image Protection Script
 * Prevents right-click and drag events on elements with the .img-protected class.
 */
document.addEventListener('DOMContentLoaded', () => {
    const protectedImages = document.querySelectorAll('.img-protected');

    protectedImages.forEach(img => {
        // Disable right-click
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });

        // Disable drag start
        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
            return false;
        });
    });
});
