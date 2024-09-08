document.querySelectorAll('.course-section h2').forEach(sectionTitle => {
    sectionTitle.addEventListener('click', () => {
        const content = sectionTitle.nextElementSibling;
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
