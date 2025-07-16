export class Todo {
    constructor(data, selector) {
        this.data = data;
        this._templateElement = document.querySelector(selector);
    }

    _generateCheckBoxEl() {
        this._checkbox.checked = this._isCompleted;
        this._checkbox = this._element.querySelector(".todo__completed"); 
        this._checkbox = `todo-${this._data.id}`;
        todoLabel.setAttribute("for", `todo-${this._data.id}`);
        todoLabel.setAttribute("for", this._id);
    }

    getView() {
        this._templateElement = this._templateElement.content
        .querySelector(".todo")
        .cloneNode(true);
        
        const TodoNameEl = this._todoElement.querySelector(".todo__name");
        const todoDate = this.todoELement.querySelector(".todo__date");
        const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

        todoNameEl.textContent = this._data.name;

        this._generateCheckBoxEl();
        this._setEventListeners();
    }

    _setEventListeners() {
        this._checkbox.addEventListener("change", () => {
            this._handleCompletedClick();
        });

        const deleteButton = this._element.querySelector(".todo__delete-btn");
        deleteButton.addEventListener("click", () => {
            this._handleDeleteClick();
        });
    }


}

export default Todo;