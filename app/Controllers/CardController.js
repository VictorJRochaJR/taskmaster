import { cardService } from "../Services/CardService.js"
import { ProxyState } from "../AppState.js"
import { cardView } from "../Views/View.js"
// import { loadState } from "../Utils/LocalStorage.js"


export default class CardController {
    constructor() {
        ProxyState.on("cards", cardView.renderCards(cardService.getCards()))
        console.log("card controller is working")
        cardView.bindCreateCard(this.addCard)
        cardView.bindDeleteCard(this.deleteCard)
        /*this.addTask = this.addTask.bind(this) */

    }
    addCard(title) {
        const card = cardService.createCard(title)
        console.log("add card", card)
        console.log("add bindtask", this)
        cardView.bindAddTask((id, title) => {
            console.log(id, title)
            cardService.addTask(id, title)
            cardView.renderCards(cardService.getCards())
        }, card.form)


        cardView.renderCards(cardService.getCards())
        loadState()
    }
    deleteCard(id) {
        const card = cardService.deleteCard(id)
        card.form = null
        cardView.renderCards(cardService.getCards())

    }

}

