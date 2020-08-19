class ChoreCards {

    constructor() {
        this._chores = [];
    }


    addChore(chore) {
        this._chores.push(chore);
    }

    removeAllChores() {
        this._chores = [];
    }

    get chores() {
        return [].concat(this._chores);
    }

}