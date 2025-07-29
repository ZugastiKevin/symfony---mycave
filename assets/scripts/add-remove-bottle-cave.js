document.querySelectorAll('.toggle-cave').forEach(btn => {
    btn.addEventListener('click', async () => {
        const url = btn.dataset.url;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            const data = await response.json();

            if (data.inCave) {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-danger');
                btn.textContent = btn.dataset.labelRemove;
                btn.dataset.inCave = '1';
            } else {
                btn.classList.remove('btn-danger');
                btn.classList.add('btn-primary');
                btn.textContent = btn.dataset.labelAdd;
                btn.dataset.inCave = '0';
            }
        } catch (err) {
            console.error('Erreur ajout/retrait de cave:', err);
        }
    });
});
