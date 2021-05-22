class TaskModel(){
    constructor(title, id){
        this.title = title
        this.id = id
        this.complete = false
    }
    toggleTask(){
        this.complete = !this.complete

    }
}