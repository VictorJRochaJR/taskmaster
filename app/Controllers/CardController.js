import { cardService } from "../Services/CardService.js"
import CardModel from "../Models/CardModel.js"

export default class CardController {
    constructor() {
        // Proxystate.on('tasks' this.drawCards)
        // this.drawCards()
        console.log("card controller is working")
    }

    createCard(event) {
        event.preventDefault()
        console.log(event.target.value)
        Model.addCard(event.target.value)

    }

}

// drawCards() {
//     let template = ''

// }