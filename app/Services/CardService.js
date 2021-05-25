// import ListModel  from "../Models/ListModel.js"
import CardModel from "../Models/CardModel.js"
import { ProxyState } from "../AppState.js"
import { cardView } from "../Views/View.js"
// import { saveState } from "../Utils/LocalStorage.js"


class CardService {
    constructor(cardTitles) {
        console.log("card service is connected")
        cardTitles.forEach(card => this.createCard(card))
    }
    addTask(id, title) {
        console.log(this)
        const cardCopy = [...ProxyState.cards];
        let index = cardCopy.findIndex((card) => card.id == id)
        cardCopy[index].tasks.push(new CardModel({
            title
        }))
        ProxyState.cards = cardCopy

    }
    createCard(cardTitle) {
        const card = new CardModel({
            title: cardTitle,
            form: cardView.createElement("form", "form-input")
        })
        ProxyState.cards = [...ProxyState.cards, card];
        // ProxyState.on('cards', saveState)
        return card
    }
    getCards() {
        return ProxyState.cards

    }
    deleteCard(id) {
        const cardCopy = [...ProxyState.cards];
        let index = cardCopy.findIndex((card) => card.id == id)
        const card = cardCopy.splice(index, 1)
        ProxyState.cards = cardCopy
        return card
    }

}

export const cardService = new CardService(["adfa", "adfdasfa"])