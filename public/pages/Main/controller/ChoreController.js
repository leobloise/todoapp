class ChoreController {

    constructor() {

        this.title = $('#title');
        this.activity = $('#activity_select');
        this.timeFrom = $('#timeFrom');
        this.timeDayFrom = $('#timeDayFrom');
        this.timeTo = $('#timeTo');
        this.timeDayTo = $('#timeDayTo');
        this.description = $('#description');
        
        this._msg = ProxyFactory.create(new Message(''), new MessageView($('.test')), ['text']);        
        this._choreCards = ProxyFactory.create(new ChoreCards(), new CardsView($('.cardarea')), ['addChore', 'removeAllChores'])     
    }

    RegisterNewChore(e) {

        e.preventDefault();
        // HttpService.post('/teste').then(res => console.log(res));
        this._choreCards.addChore(this._createChore());
        this._clearForm();
    }

    clearAll(e) {
        e.preventDefault();
        this._choreCards.removeAllChores();
        this._clearForm();
    }

    _createChore(){
        return new Chore(this.title.value, this.activity.value,
        this.timeFrom.value, this.timeDayFrom.value,
        this.timeTo.value, 
        this.timeDayTo.value, 
        this.description.value)
    }

    _clearForm() {
        this.title.value = '';
        this.activity.value = ''; 
        this.timeFrom.value = '';
        this.timeDayFrom.value = '';
        this.timeTo.value = '';
        this.timeDayTo.value = '';
        this.description.value = '';

        this.title.focus();
    }

}

