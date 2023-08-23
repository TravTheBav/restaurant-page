import Photo from './images/kuddly-krab-sign.jpg';

const loadHome = function () {
    const mainContent = document.querySelector('main');

    const pageContent = document.createElement('div');
    pageContent.classList.add('content');

    const subHeader = document.createElement('div');
    subHeader.classList.add('sub-header');

    const cardTitle = document.createElement('h1');
    cardTitle.textContent = "The Kuddly Krab!";
    cardTitle.classList.add("kuddly-text", "centered");

    const cardInfo = document.createElement('p');
    cardInfo.textContent = "Open Mon-Sun, 8 am - 9 pm";
    cardInfo.classList.add("card-info", "centered");

    subHeader.appendChild(cardTitle);
    subHeader.appendChild(cardInfo);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const cardImage = new Image();
    cardImage.classList.add('photo');
    cardImage.src = Photo;

    imgContainer.appendChild(cardImage);

    pageContent.appendChild(subHeader);
    pageContent.appendChild(imgContainer);
    mainContent.appendChild(pageContent);
}

export default loadHome