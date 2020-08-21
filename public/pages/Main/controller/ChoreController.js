class ChoreController {

    constructor() {

        this.title = $('#title');
        this.activity = $('#activity_select');
        this.timeFrom = $('#timeFrom');
        this.timeDayFrom = $('#timeDayFrom');
        this.timeTo = $('#timeTo');
        this.timeDayTo = $('#timeDayTo');
        this.description = $('#description');
        this._msg = ProxyFactory.create(new Message(''), new MessageView($('.alert')), ['text']);        
        this._choreCards = ProxyFactory.create(new ChoreCards(), new CardsView($('.cardarea')), ['addChore', 'removeAllChores'])     
    }

    RegisterNewChore(e) {

        e.preventDefault();

        try {
            
            const chore = this._createChore();
            this._choreCards.addChore(chore);
            this._msg.text = 'Adicionado com sucesso';
            this._clearForm();

        } catch(e) {
            console.log(e);
            this._msg.text = e.message;
            window.scrollTo(0,0);
        }
    }

    clearAll(e) {
        e.preventDefault();
        this._choreCards.removeAllChores();
        this._msg.text = 'Removidos com sucesso!';
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

