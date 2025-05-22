export default class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElementId = `#${inputElement.id}-error`;
        const errorElement = this._formElement.querySelector(errorElementId);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(
                inputElement,
                inputElement.validationMessage
            );
        } else {
            this._hideInputError(inputElement);
        }
    }
    
    _hideInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this._formElement.querySelector(errorElementId);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._settings.errorClass);
    }
    resetValidation() {
        const inputList = Array.from(
            this._formElement.querySelectorAll(this._settings.inputSelector)
        );
        
        inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });

        const buttonElement = this._formElement.querySelector(
            this._settings.submitButtonSelector
        );

        buttonElement.classList.add(this._settings.inactiveButtonClass);
        this._formElement.reset();
    }

    _setEventListeners() {
         const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
         const submitButton = this._formElement.querySelector(this._settings.submitButtonSelector)

         inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () =>{
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, submitButton);
            });
         });
    }

    _hasInvalidInput(inputList) {
       return inputList.some((inputElement) => !inputElement.validity.valid);
    }

     _toggleButtonState = (inputList, submitButton) => {
        if (this._hasInvalidInput(inputList)) {
        submitButton.classList.add(this._settings.inactiveButtonClass);
        submitButton.disabled = true;
    } else {
        submitButton.classList.remove(this._settings.inactiveButtonClass);
        submitButton.disabled = false; 
    }
}

    enableValidation() {
        this._setEventListeners();
    }
}