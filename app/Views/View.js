
export default class View {
    constructor() {
        this.app = this.getElement("#app");
        this.form = this.createElement("form", "form");
        this.input = this.createElement("input", "input")
        this.form.append(this.input);
        this.app.append(this.form);
        this.cards = this.createElement("div", ".cards");
        this.app.append(this.cards);

    }
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    createElement(tag, className = null, content = null) {
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }
        if (content) {
            element.innerHTML = content
        }
        return element
    }
    getToDo() {
        return this.input.value
    }
    setToDo(text) {
        this.input.value = text
    }
    createTaskElement(task) {
        let taskElement = this.createElement("div")
        let title = this.createElement("p", "task-title", task.title)
        let checkBox = this.createElement("input", "checkbox")
        checkBox.type = "checkbox"
        checkBox.checked = false
        taskElement.append(title)
        taskElement.append(checkBox)
        return taskElement

    }
    createTaskListElement(tasks) {
        let taskListElement = this.createElement("div", "task-list")
        tasks.forEach(task => {
            let taskElement = this.createTaskElement(task)
            taskListElement.append(taskElement)
        })
        return taskListElement
    }
    createCardElement(card) {
        console.log(card)
        let taskListElement = this.createTaskListElement(card.tasks)
        let cardElement = this.createElement("div", "card");
        cardElement.id = card.id;
        let title = this.createElement("p", "card-title", card.title);
        let deleteButton = this.createElement("button", "card-delete", "X")
        let cardHeader = this.createElement("div", "card-header")
        cardHeader.append(card.title)
        cardHeader.append(deleteButton)
        console.log(title)
        console.log(card.title)
        cardElement.append(cardHeader);
        cardElement.append(taskListElement)
        let formElement = card.form;
        console.log(cardElement.lastChild.tagName, formElement.tagName)
        if (!card.firstRender) {
            console.log("if statement")
            const taskInput = this.createElement("input", "card-input")
            formElement.append(taskInput)
            cardElement.append(formElement)
        }
        this.cards.append(cardElement)

        console.log(this.cards)
        return cardElement
    }
    renderCards(cards) {
        console.log(this.cards)
        while (this.cards.firstChild) {
            this.cards.removeChild(this.cards.firstChild)
        }
        cards.forEach(card => this.createCardElement(card))
        this.app.append(this.cards);
    }
    getCardInput() {
        return this.input.value;
    }
    resetCardInput() {
        this.input.value = ""
    }
    getTaskInput() {

    }

    bindCreateCard(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault()
            const inputText = this.getCardInput()
            if (inputText.length > 3 && inputText.length < 15) {
                handler(inputText)
            }

            this.resetCardInput()
        })
    }
    bindDeleteCard(handler) {
        this.cards.addEventListener("click", event => {
            if (event.target.className == "card-delete") {
                let id = event.target.parentElement.parentElement.id
                handler(id)

            }

        })
    }
    bindAddTask(handler, form) {
        form.addEventListener("submit", event => {
            console.log("bind add task ", event)
            if (event.target.className == "card-input") {
                let id = event.target.parentElement.parentElement.id
                handler(id, event.target.value)
            }
        })

    }
}

export const cardView = new View()