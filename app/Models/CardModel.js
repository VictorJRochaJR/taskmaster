import { generateId } from "../Utils/GenerateId.js"




export default class CardModel {
    constructor({ title, form }) {
        this.id = generateId()
        this.title = title
        this.tasks = []
        this.form = form
        this.firstRender = false

        console.log("models are connected")
    }
}

