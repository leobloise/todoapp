import ConnectionFactory from './ConnectionFactory.js';
import { HttpRequest } from './HttpRequest.js';


export default class TodoappDAO {
    
    constructor() {
        this._connection = ConnectionFactory.createConnection();
        Object.freeze(this)
    }

    addChoreToDb(chores) {

        return new Promise((resolve, reject) => {

            let request = this._connection.transaction('chore', 'readwrite')
            let choreObjectStore = request.objectStore('chore')
            
            chores.forEach(chore => {
                let request = choreObjectStore.add(JSON.stringify(chore));
                request.onsuccess = e => console.log('Adicionado com sucesso');
                request.onerror = e => {
                    console.log(e);
                    reject('Não foi possível adicionar um elemento')
                } 
            });

            resolve('Itens adicionados com sucesso');

        })
        
    }
    
    getAllChores() {
        return new Promise((resolve, reject) => {
            HttpRequest.get('/getchore')
            .then(choresFromDb => {
                let chores = [];
                JSON.parse(choresFromDb).forEach(chore => chores.push(chore))
                
                let request = this._connection.transaction('chore', 'readwrite')
                let choreObjectStore = request.objectStore('chore');
    
                let cursor = choreObjectStore.openCursor();
    
                cursor.onsuccess = e => {
                    const atual = e.target.result
                    
                    if(atual){
                        chores.push(JSON.parse(atual.value))
                        atual.continue();
                    } else {
                        resolve(chores);
                    }
                
                }

                cursor.onerror = e => {
                    console.log(e);
                    reject(e);
                }
            })
            .catch(err => reject(err))
           
        });
    }

    deleteAllChores() {
        return new Promise((resolve, reject) => {
            let request = this._connection.transaction('chore', 'readwrite');
            let choreObjectStore = request.objectStore('chore');

            let clearRequest = choreObjectStore.clear();

            clearRequest.onsuccess = event => resolve('Apagado com sucesso')
            clearRequest.onerror = event => {
                console.log(event.target.result)
                reject('Não foi possível apagar os resultados')
            }
        });
    }

} 