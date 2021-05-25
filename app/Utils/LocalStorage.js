// import { ProxyState } from "../AppState/.js"
// import CardModel from "../Models/CardModel.js"
// import TaskModel from "../Models/TaskModel.js"

// export function saveState() {
//     localStorage.setItem('TaskMaster', JSON.stringify({
//         cards: ProxyState.cards,
//     }))
// }

// export function loadState() {
//     let data = JSON.parse(localStorage.getItem('TaskMaster'))
//     console.log(data)
//     if (data != null) {
//         ProxyState.cards = data.cards.map(p => new Card(p))

//     }

// }