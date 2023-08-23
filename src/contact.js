import Photo from './images/mr-krabs.jpg';

const loadContact = function () {
    const mainContent = document.querySelector('main');

    const pageContent = document.createElement('div');
    pageContent.classList.add('content');

    const contactHeader = document.createElement('h1');
    contactHeader.classList.add('card-info', 'centered');
    contactHeader.textContent = "Have a question? Reach out to us!";

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const cardImage = new Image();
    cardImage.classList.add('photo');
    cardImage.src = Photo;

    imgContainer.appendChild(cardImage);

    const phoneNumLine = document.createElement('p');
    phoneNumLine.classList.add('card-info');
    phoneNumLine.textContent = "Phone Number: 1-(555)-KUD-KRAB";

    const emailLine = document.createElement('p');
    emailLine.classList.add('card-info');
    emailLine.textContent = "Email: theKuddlyKrab@bikinibottom.com";

    [contactHeader, imgContainer, phoneNumLine, emailLine].forEach(
        (ele) => {
            pageContent.appendChild(ele);
        }
    );

    mainContent.appendChild(pageContent);
}

export default loadContact