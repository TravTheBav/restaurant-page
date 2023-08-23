import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

const tabs = document.querySelectorAll('button.tab');

let wipeContent = function () {
    const mainContent = document.querySelector('main');
    mainContent.removeChild(mainContent.firstChild);
};

tabs.forEach((button) => {
    button.addEventListener('click', function () {
        if (this.classList.contains('home')) {
            wipeContent();
            loadHome();
        }  else if (this.classList.contains('menu')) {
            wipeContent();
            loadMenu();
        }   else  {
            wipeContent();
            loadContact();
        }
    });
});

loadHome();