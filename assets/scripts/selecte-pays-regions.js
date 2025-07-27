document.addEventListener('DOMContentLoaded', () => {
    const paysSelect = document.querySelector('#bottles_type_form_pays');

    if (!paysSelect) return;

    const urlBaseRegions = paysSelect.dataset.url;

    paysSelect.addEventListener('change', function () {
        const paysId = this.value;

        fetch(`${urlBaseRegions}?paysId=${paysId}`, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(data => {
            const resultsContainerRegions = document.querySelector('#region-field');
            if (resultsContainerRegions && data.html) {
                resultsContainerRegions.outerHTML = data.html;
            }
        })
        .catch(error => console.error('Erreur:', error));
    });
});
