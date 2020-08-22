import ProxyFactory from '../service/ProxyFactory.js';
import Message from '../model/Message.js';
import MessageView from '../view/MessageView.js';
import ChoreCards from '../model/ChoreCards.js';
import CardsView from '../view/CardsView.js';
import Chore from '../model/Chore.js';
import TodoappDAO from '../service/TodoappDAO.js';

export default class ChoreController {

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
        this._todoappdao = new TodoappDAO();
        this._initialize();  
    }

    _initialize() {
        this._todoappdao.getAllChores()
        .then(res => res.map(objecto => JSON.parse(objecto)))
        .then(res => res.map(objecto => new Chore(objecto._title, objecto._activity,
            `${Number(objecto._timeFrom._hour)}:${Number(objecto._timeFrom._minute)}`,
            `${objecto._timeFrom._year}-${objecto._timeFrom._month}-${objecto._timeFrom._day}`,
            `${objecto._timeTo._hour}:${objecto._timeTo._minute}`,
            `${objecto._timeTo._year}-${objecto._timeTo._month}-${objecto._timeTo._day}`,
            objecto._description)))
        .then(res => res.forEach(chore => this._choreCards.addChore(chore)))
    }

    RegisterNewChore(e) {

        e.preventDefault();

        try {

            const chore = this._createChore();
            this._todoappdao.addChoreToDb([chore])
            .then(res => {
                this._msg.text = res
                this._choreCards.addChore(chore);
                this._clearForm();
            }).catch(err => {
                this._msg.text = err;
                window.scrollTo(0,0);
            })

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

