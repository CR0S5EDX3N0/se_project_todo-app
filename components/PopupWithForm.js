import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    console.log(handleFormSubmit);
    super({ popupSelector: popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputs = Array.from(this._form.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupElement
      .querySelector(".popup__form")
      .addEventListener("submit", (evt) => {
        this._handleFormSubmit(this._getInputValues());
      });
  }
}

export default PopupWithForm;
