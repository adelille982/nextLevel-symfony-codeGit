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

    var switchButton2 = document.getElementById('toggleSwitch2');
    var switchLabel2 = document.getElementById('toggleLabel2');
    var menu12 = document.getElementById('menu3');
    var menu22 = document.getElementById('menu4');

    var navLinkHorizontal2 = document.querySelector('.nav-link-horizontal2');
    var acheterCredits = document.getElementById('acheterCredits');

    // Fonction pour mettre à jour l'état des menus
    function updateMenus(isPartner) {
        switchButton.checked = isPartner;
        switchLabel.textContent = isPartner ? 'Partenaire' : 'Client';
        menu1.style.display = isPartner ? 'none' : 'block';
        menu2.style.display = isPartner ? 'block' : 'none';

        switchButton2.checked = isPartner;
        switchLabel2.textContent = isPartner ? 'Part.' : 'Client';
        menu12.style.display = isPartner ? 'block' : 'none';
        menu22.style.display = isPartner ? 'none' : 'block';

        navLinkHorizontal2.style.display = isPartner ? 'block' : 'none';
        acheterCredits.style.display = isPartner ? 'none' : 'block';
    }

    // Récupérer l'état stocké et initialiser les menus
    var isPartner = localStorage.getItem('isPartner') === 'true';
    updateMenus(isPartner);

    // Écouteurs d'événements pour les switches
    switchButton.addEventListener('change', function () {
        var isChecked = this.checked;
        localStorage.setItem('isPartner', isChecked);
        updateMenus(isChecked);
    });

    switchButton2.addEventListener('change', function () {
        var isChecked = this.checked;
        localStorage.setItem('isPartner', isChecked);
        updateMenus(isChecked);
    });

    // Gestion du menu déroulant de recherche pour le menu normal
    var navItem = document.querySelector('.nav-item');
    var navLink = navItem.querySelector('.nav-link.d-flex');
    var collapseMenu = navItem.querySelector('.collapse');
    var collapseIcon = navLink.querySelector('.collapse-icon');

    collapseMenu.style.maxHeight = '0px';

    navLink.addEventListener('click', function (event) {
        event.preventDefault();
        var isCollapsed = collapseMenu.style.maxHeight !== '0px';
        collapseMenu.style.maxHeight = isCollapsed ? '0px' : `${collapseMenu.scrollHeight}px`;
        collapseIcon.classList.toggle('collapse-icon-open', !isCollapsed);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    var closeIcon = document.querySelector('.close-icon');
    var navbar = document.querySelector('.navbar');
    var navbar2 = document.querySelector('.navbar2');
    var navbarHorizontal = document.querySelector('.navbar-horizontal');

    // Fonction pour basculer les menus
    function toggleMenus() {
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            navbar.style.display = 'block';
            navbar2.style.display = 'none';
            closeIcon.style.display = 'block';
            hamburgerIcon.style.display = 'none'; // Masquer l'icône du menu burger
        } else {
            navbar.style.display = 'none';
            navbar2.style.display = 'block';
            closeIcon.style.display = 'none';
            hamburgerIcon.style.display = 'block'; // Afficher l'icône du menu burger
        }
        adjustHorizontalMenu();
    }

    // Fonction pour ajuster la position du menu horizontal
    function adjustHorizontalMenu() {
        navbarHorizontal.style.left = navbar2.style.display === 'block' ? '90px' : '250px';
    }

    // Initialisation des états des menus
    navbar.style.display = 'block';
    navbar2.style.display = 'none';
    closeIcon.style.display = 'block'; // Afficher seulement la croix initialement
    hamburgerIcon.style.display = 'none'; // Masquer l'icône du menu burger initialement
    adjustHorizontalMenu();

    // Écouteurs d'événements pour les icônes
    hamburgerIcon.addEventListener('click', toggleMenus);
    closeIcon.addEventListener('click', toggleMenus);

    // Ajuster lors du redimensionnement de la fenêtre
    window.onresize = adjustHorizontalMenu;
});


