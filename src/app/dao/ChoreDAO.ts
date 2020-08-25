import sqlite3 from "sqlite3"
import Chore from "../models/Chore";

class ChoreDAO {

    private DB: sqlite3.Database;
    
    constructor(db: sqlite3.Database) {
        this.DB = db    
    }
    
    public AllChores(): Promise<Array<Chore>> {
        return new Promise((resolve, reject) => {
            this.DB.all(`
                SELECT * FROM chore
            `, (err, chores) => {
                if(err) {
                    console.log(err)
                    return reject('Houve um erro, por favor, contate o adm')
                }
                return resolve(chores)
            })
        });
    }

    public addChore(chores: Chore): Promise<unknown> {
        
        return new Promise((resolve, reject) => {
            this.DB.run(`
                INSERT INTO chore
                (title, activity, timefrom, timeto, description)
                VALUES(?,?, ?, ?, ?)
            `, 
            [
                chores.title,
                chores.activity,
                JSON.stringify(chores.timeFROM),
                JSON.stringify(chores.timeTO),
                chores.description
            ],
            (err) => {
                if(err) {
                    console.log(err)
                    return reject('Não foi possível inserir essa atividade')
                }

                return resolve()
            })
        })
    }


}

export default ChoreDAO;