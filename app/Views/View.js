
export default class View {
    constructor(model) {
        this.app = this.getElement("#app");
        this.form = this.createElement("form", "form");
        this.input = this.createElement("input", "input")
        this.form.append(this.input);
        this.app.append(this.form);
        this.cards = this.createElement("div", ".cards");
        console.log(model.cards);
        this.renderCards(model.cards);
        this.app.append(this.cards);

    }
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    createElement(tag, className) {

        const element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }
        return element
    }
    getToDo() {
        return this.input.value
    }
    setToDo(text) {
        this.input.value = text
    }
    renderCards(cards) {
        console.log(this.cards)
        while (this.cards.firstchild) {
            this.cards.removeChild(this.cards.firstChild)
        }
        cards.forEach(card => {
            let cardElement = this.createElement("div", "card");
            let title = this.createElement("p", "card-title");
            console.log(title)
            console.log(card.title)
            title.innerText = card.title;
            cardElement.append(title);
            this.cards.append(cardElement)
            console.log(this.cards)
        })
        this.app.append(this.cards);
    }
}