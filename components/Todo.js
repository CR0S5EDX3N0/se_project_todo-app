export class Todo {
    constructor(todoData, templateSelector) {
        this._name = todoData.name;
        this._id = todoData.id;
        this._isCompleted = todoData.isCompleted;
        this._date = todoData.date;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const todoElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.todo')
        .cloneNode(true);
            
        return todoElement;
    }

    _setEventListeners() {
        const checkbox = this._element.querySelector(".todo__completed");
        const deleteButton = this._element.querySelector(".todo__delete-btn");

        checkbox.addEventListener("change", () => {
            this._handleCompletedClick();
        });

        deleteButton.addEventListener("click", () => {
            this._handleDeleteClick();
        });
    }

        _handleCompletedClick() {
        this._isCompleted = !this._isCompleted;
    }

    _handleDeleteClick() {
        this._element.remove();
    }

     getView() {
        this._element = this._getTemplate();

        const todoName = this._element.querySelector(".todo__name");
        const todoCheckbox = this._element.querySelector(".todo__completed");

        todoCheckbox.id = this.id;
        const todoLabel = this._element.querySelector(".todo__label");
        todoLabel.setAttribute("for", this._id);

        todoName.textContent = this._name;
        todoCheckbox.checked = this._isCompleted;

        if (this._date) {
            const tododate = this._element.querySelector(".todo__date");
            tododate.textContent = this._date;
        }

        this._setEventListeners();

        return this._element
     }
}