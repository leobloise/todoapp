import ChoreDAO from '../dao/ChoreDAO';
import { Database } from 'sqlite3';
import Chore from '../models/Chore';
import BodyChoreRequisition from '../interfaces/BodyChoreRequisition';

class ChoreControllers  {
    
    private choredao: ChoreDAO

    constructor(db: Database) {
        this.choredao = new ChoreDAO(db)
    }

    public addChoreToDb(body: BodyChoreRequisition) {
        return new Promise((resolve, reject) => {
            try {
                const chore = this.justCreateAndReturnChorePls(body)
                this.choredao.addChore(chore)
                .then(() => resolve())
                .catch(err => reject(err))
            } catch(e) {
                console.log(e)
                return reject('Não foi possível inserir a atividade, por favor, verifique os dados')
            }
        })  
    }

    public getAllChores() {
        return new Promise((resolve, reject) => {
            this.choredao.AllChores()
            .then(chores => chores.map(chore => this.createChoreFromDB(chore)))
            .then(chores => resolve((chores)))
            .catch(err => reject(err))
        });
    }

    public deleteAllChores() {
        return new Promise((resolve, reject) => {
            this.choredao.deleteAll()
            .then(()=> resolve())
            .catch(err => reject(err))
        })
    }

    //Preciso refatorar isso aqui pq meu deus que medo
    private createChoreFromDB(chore: any) {
        const {title, activity, timefrom, timeto, description} = chore
        const timeFrom = JSON.parse(timefrom);
        const timeTo = JSON.parse(timeto);

        return this.createChore(title, `${timeFrom._hour}:${timeFrom._minute}`,
                `${timeFrom._year}-${timeFrom._month}-${timeFrom._day}`,
                `${timeTo._hour}:${timeTo._minute}`,
                `${timeTo._year}-${timeTo._month}-${timeTo._day}`,
                activity,
                description)
    }

    private justCreateAndReturnChorePls(body: BodyChoreRequisition) {
        const {title, activity, timefrom, timeto, description} = body;
        const timeFrom = JSON.parse(timefrom);
        const timeTo = JSON.parse(timeto);

        return this.createChore(title, `${timeFrom._hour}:${timeFrom._minute}`,
                `${timeFrom._year}-${timeFrom._month}-${timeFrom._day}`,
                `${timeTo._hour}:${timeTo._minute}`,
                `${timeTo._year}-${timeTo._month}-${timeTo._day}`,
                activity,
                description)
    }

    private createChore(title: string,
        timeFrom: string, 
        timeDayFrom: string, 
        timeTo: string, 
        timeDayTo: string,
        activity?: string, 
        description?: string)  {

        return new Chore(title,
            timeFrom, timeDayFrom,
            timeTo, 
            timeDayTo,
            activity, 
            description)
    }

}

export default ChoreControllers;