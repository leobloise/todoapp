import ChoreDAO from '../dao/ChoreDAO';
import { Database } from 'sqlite3';
import Time from '../models/Time';
import Chore from '../models/Chore';
import { time } from 'console';

interface BodyChoreRequisition extends Body {
    title: string
    activity?: string
    timefrom: string
    timeto: string
    description?: string
}

class ChoreControllers  {
    
    private choredao: ChoreDAO

    constructor(db: Database) {
        this.choredao = new ChoreDAO(db)
    }

    public addChoreToDb(body: BodyChoreRequisition) {

        return new Promise((resolve, reject) => {
            try {
                const {title, activity, timefrom, timeto,description} = body;
                const timeFrom = JSON.parse(timefrom);
                const timeTo = JSON.parse(timeto);
    
                const chore = new Chore(title, `${timeFrom._hour}:${timeFrom._minute}`,
                `${timeFrom._year}-${timeFrom._month}-${timeFrom._day}`,
                `${timeTo._hour}:${timeTo._minute}`,
                `${timeTo._year}-${timeTo._month}-${timeTo._day}`,activity,
                description)
    
                
    
            } catch(e) {
                console.log(e)
                return reject('Não foi possível inserir a atividade, por favor, verifique os dados')
            }
        })
        
        
    }

}

export default ChoreControllers;