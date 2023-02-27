let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#user-name');
let jobInput = document.querySelector('#user-career');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');

function openPopup (popup) {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileCareer.textContent
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');  
}

profileEditButton.addEventListener('click', function () {
    openPopup (popup); 
});

popupCloseButton.addEventListener('click', function () {
    closePopup (popup);
});

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;
    closePopup (popup); 
}  

formElement.addEventListener('submit', handleFormSubmit); 




 