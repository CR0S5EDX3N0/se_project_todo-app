import Todo from "../components/Todo.js";
import { initialTodos, validationConfig } from "../utils/constants.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (data) => {
    console.log(data);
    const name = data.name;
    const dateInput = data.date;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const todoData = { name, date, id };
    const todo = generateTodo(todoData);
    section.addItem(todo);
    todoCounter.updateTotal(true);

    newTodoValidator.resetValidation();
    addTodoPopup.close();
  },
});

addTodoPopup.setEventListeners();
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");

  return todo.getView();
};

const renderTodo = (item) => {
  const todoElement = generateTodo(item);
  todosList.append(todoElement);
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    renderTodo(item);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
  addTodoPopup.close();
});

const todoCounter = new TodoCounter(initialTodos, ".counter__text");


newTodoValidator.enableValidation();
