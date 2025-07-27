document.addEventListener('DOMContentLoaded', () => {
    const typeSelect = document.querySelector('#bottles_type_form_type');
    const resultsContainerCepages = document.querySelector('#cepage-field');

    if (!typeSelect) return;

    const urlBaseCepages = typeSelect.dataset.url;

    typeSelect.addEventListener('change', function () {
        const typeId = this.value;

        fetch(`${urlBaseCepages}?typeId=${typeId}`, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(data => {
            const resultsContainerCepages = document.querySelector('#cepage-field');
            if (resultsContainerCepages && data.html) {
                resultsContainerCepages.outerHTML = data.html;
            }
        })
        .catch(error => console.error('Erreur:', error));
    });
});
