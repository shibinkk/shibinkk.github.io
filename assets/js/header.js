document.querySelectorAll('.fac a').forEach(link => {
    link.addEventListener('click', () => {
        // Uncheck the menu-toggle checkbox to close the wrapper
        document.getElementById('menu-toggle').checked = false;
    });
});
