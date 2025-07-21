window.I18nService = (function () {
    let currentLocale = 'fr';
    let endpoint = '/ajax';

    function setLocale(locale) {
        currentLocale = locale;
        return fetch(`${endpoint}/change-locale/${locale}`, {
            method: 'POST',
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });
    }

    function collectKeys() {
        const keys = new Set();

        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            keys.add(el.dataset.i18nKey);
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attrs = el.dataset.i18nAttr.split(',');
            attrs.forEach(attr => {
                const keyAttr = `i18n${attr.charAt(0).toUpperCase() + attr.slice(1)}`;
                const key = el.dataset[keyAttr];
                if (key) keys.add(key);
            });
        });

        return Array.from(keys);
    }

    function fetchTranslations(keys) {
        console.log('Envoi des clés pour traduction :', keys);
        return fetch(`${window.location.origin}${endpoint}/get-translations/${currentLocale}`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ keys })
        }).then(res => res.json());
    }

    function updateDom(translations) {
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.dataset.i18nKey;
            if (translations[key]) el.textContent = translations[key];
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attrs = el.dataset.i18nAttr.split(',');
            attrs.forEach(attr => {
                const keyAttr = `i18n${attr.charAt(0).toUpperCase() + attr.slice(1)}`;
                const key = el.dataset[keyAttr];
                if (translations[key]) {
                    el.setAttribute(attr, translations[key]);
                }
            });
        });
    }

    function changeLanguage(locale) {
        return setLocale(locale)
            .then(() => {
                const keys = collectKeys();
                return fetchTranslations(keys);
            })
            .then(translations => {
                updateDom(translations);
            });
    }

    return {
        init: function (defaultLocale = 'fr', baseEndpoint = '/ajax') {
            currentLocale = defaultLocale;
            endpoint = baseEndpoint;
        },
        changeLanguage
    };
})();
