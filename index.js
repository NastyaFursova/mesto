let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');

profileEditButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
});

popupCloseButton.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#user-name');
let jobInput = document.querySelector('#user-career');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');

nameInput.value = 'Жак-Ив Кусто';
jobInput.value = 'Исследователь океана';

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}  

formElement.addEventListener('submit', handleFormSubmit); 




 