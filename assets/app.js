/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

document.addEventListener('DOMContentLoaded', function () {
    var switchButton = document.getElementById('toggleSwitch');
    var switchLabel = document.getElementById('toggleLabel');
    var menu1 = document.getElementById('menu1');
    var menu2 = document.getElementById('menu2');
    var navLinkHorizontal2 = document.querySelector('.nav-link-horizontal2');
    var acheterCredits = document.getElementById('acheterCredits');

    // Récupérer l'état stocké ou utiliser la valeur par défaut
    var isPartner = localStorage.getItem('isPartner') === 'true';

    // Initialiser les éléments sur le chargement de la page
    switchButton.checked = isPartner;
    switchLabel.textContent = isPartner ? 'Partenaire' : 'Client';
    menu1.style.display = isPartner ? 'none' : 'block';
    menu2.style.display = isPartner ? 'block' : 'none';
    navLinkHorizontal2.style.display = isPartner ? 'block' : 'none';
    acheterCredits.style.display = isPartner ? 'none' : 'block';

    // Événement de changement pour le switch
    switchButton.addEventListener('change', function () {
        var isChecked = this.checked;
        localStorage.setItem('isPartner', isChecked); // Stocker l'état
        switchLabel.textContent = isChecked ? 'Partenaire' : 'Client';
        menu1.style.display = isChecked ? 'none' : 'block';
        menu2.style.display = isChecked ? 'block' : 'none';
        navLinkHorizontal2.style.display = isChecked ? 'block' : 'none';
        acheterCredits.style.display = isChecked ? 'none' : 'block';
    });

    // Gestion du menu déroulant de recherche
    var navItem = document.querySelector('.nav-item');
    var navLink = navItem.querySelector('.nav-link.d-flex');
    var collapseMenu = navItem.querySelector('.collapse');
    var collapseIcon = navLink.querySelector('.collapse-icon');

    collapseMenu.style.maxHeight = '0px'; // S'assurer que le menu est fermé au chargement

    navLink.addEventListener('click', function (event) {
        event.preventDefault();
        var isCollapsed = collapseMenu.style.maxHeight !== '0px';
        collapseMenu.style.maxHeight = isCollapsed ? '0px' : `${collapseMenu.scrollHeight}px`;
        collapseIcon.classList.toggle('collapse-icon-open', !isCollapsed);
    });
});