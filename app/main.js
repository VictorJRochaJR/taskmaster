//import ValuesController from "./Controllers/ValuesController.js";
import CardController from "./Controllers/CardController.js"
import View from "./Views/View.js"
//import { ProxyState } from "../AppState.js";
import AppModel from "./Models/AppModel.js"
import CardModel from "./Models/CardModel.js"



class App {
  constructor() {

    //valuesController = new ValuesController();
    this.cardController = new CardController();
    this.cards = []
    for (let i = 0; i < 3; i++) {
      this.cards.push(new CardModel(`card ${i}`))
    }
    this.appModel = new AppModel(this.cards)
    this.view = new View(this.appModel);
  }
}






window["app"] = new App();
