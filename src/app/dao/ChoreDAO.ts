import sqlite3 from "sqlite3"
import Chore from "../models/Chore";

class ChoreDAO {

    private DB: sqlite3.Database;
    
    constructor(db: sqlite3.Database) {
        this.DB = db    
    }
    
    get AllChores(): Promise<Array<Chore>> {
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
}