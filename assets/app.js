
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './styles/app.scss';
import './scripts/form-login.js';
import './scripts/i18nService.js';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

document.addEventListener('DOMContentLoaded', function () {
    I18nService.init('fr');

    document.querySelectorAll('[data-change-locale]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const locale = this.dataset.changeLocale;
            I18nService.changeLanguage(locale);
        });
    });
});
