import sqlite3, { Database } from 'sqlite3'

sqlite3.verbose();

const DB = new Database('database.db')

DB.serialize(()=>{
    DB.run(`
        CREATE TABLE IF NOT EXISTS chore(
            id  INTEGER PRIMARY KEY AUTOINCREMENT ,
            title VARCHAR(255) NOT NULL,
            activity VARCHAR(255),
            timefrom TEXT NOT NULL,
            timeto TEXT NOT NULL,
            description TEXT
        )
    `)
})

export default DB;