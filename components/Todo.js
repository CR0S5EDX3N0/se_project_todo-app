export class Todo {
    constructor(data, templateSelector) {
        this._data = data;
        this._name = todoData.name;
        this._id = todoData.id;
        this._isCompleted = todoData.isCompleted;
        this._date = todoData.date;
        this._templateSelector = templateSelector;
        this._checkbox = null;
    }

    getView() {
        this._element = this._getTemplate();
        
        const todoName = this._element.querySelector(".todo__name");
        this._checkbox = this._element.querySelector(".todo__completed"); 
        
        this._checkbox.id = this._id;
        const todoLabel = this._element.querySelector(".todo__label");
        todoLabel.setAttribute("for", this._id);
        
        todoName.textContent = this._name;
        this._checkbox.checked = this._isCompleted; 
        
        if (this._date) {
            const tododate = this._element.querySelector(".todo__date");
            tododate.textContent = this.formatDate();
        }
        
        this._setEventListeners();
        
        return this._element;
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