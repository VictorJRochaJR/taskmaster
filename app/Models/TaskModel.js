import { generateId } from "../Utils/GenerateId.js"

export default class TaskModel {
    constructor(title, id) {
        this.title = title
        this.id = generateId()
        this.complete = false


    }
}

