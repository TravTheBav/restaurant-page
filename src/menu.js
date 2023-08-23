const loadMenu = function () {
    const mainContent = document.querySelector('main');

    const pageContent = document.createElement('div');
    pageContent.classList.add('content');

    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('fancy-text', 'centered');
    menuHeader.textContent = ("Kuddly Krab Menu");

    const menuLine = document.createElement('hr');
    
    const menuItem_1 = document.createElement('p');
    menuItem_1.classList.add('fancy-text', 'centered');
    menuItem_1.textContent = "Salad ..... $2.00";
    
    const menuItem_2 = document.createElement('p');
    menuItem_2.classList.add('fancy-text', 'centered');
    menuItem_2.textContent = "Tea ..... $1.00";

    [menuHeader, menuLine, menuItem_1, menuItem_2].forEach(
        (ele) => {
            pageContent.appendChild(ele);
        }
    );

    mainContent.appendChild(pageContent);
}

export default loadMenu