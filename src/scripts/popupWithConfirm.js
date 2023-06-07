import Popup from "./popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, {checkDelite}) {
    super(popupSelector);
	  this._buttonConfirm = this._popup.querySelector(".popup__send-btn");
    this._handleCheckConfirm = checkDelite;
    this._form = this._popup.querySelector(".popup__form");
    
  }
  
  openPopup(cardId, element) {
    this._cardId = cardId;
    this._element = element;
    super.openPopup();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleCheckConfirm(this._cardId, this._element);
    });
  }
}


// import PopupWithForm from "./popupWithForm.js";

// export default class PopupWithConfirm extends PopupWithForm {
//   constructor(popupSelector) {
//     super(popupSelector);
// 	  this._form = this._popup.querySelector(".popup__form");
//     this._submitButton = this._form.querySelector(".popup__yes")
    
//   }
  
//   openPopup(card) {
//     this._card = card;
//     super.openPopup();
//   }

  
//   setEventListeners() {
//     super.setEventListeners();
//     // this._form.addEventListener('submit', (evt) => {
//     //   evt.preventDefault();
//     //   this._submitButton(this._card);
//     // });
//   }
// }