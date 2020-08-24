import sqlite3 from "sqlite3"
import Chore from "../models/Chore";

class ChoreDAO {

    private DB: sqlite3.Database;
    
    constructor(db: sqlite3.Database) {
        this.DB = db    
    }
    
    get AllChores(): Array<Chore> {
        
    }
}