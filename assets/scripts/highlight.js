document.querySelectorAll('.highlight-toggle').forEach(btn => {
    btn.addEventListener('click', async () => {
        const bottleId = btn.dataset.id;
        const url = btn.dataset.url;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            const data = await response.json();

            // Reset all buttons
            document.querySelectorAll('.highlight-toggle').forEach(b => {
                b.classList.remove('highlighted');
                b.innerHTML = '<span>☆</span>';
            });

            if (data.highlighted) {
                btn.classList.add('highlighted');
                btn.innerHTML = '<span>★</span>';
            }
        } catch (err) {
            console.error('Erreur lors du changement de highlight:', err);
        }
    });
});
