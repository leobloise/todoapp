const request = window.indexedDB.open('todoapp', 1);
let connectionIndex;
request.onupgradeneeded = e => {

    console.log('Criando ou alterando o banco de dados');

    let os = e.target.result.objectStoreNames;
    
    if(!os)
        os.forEach(objectStoreName => e.target.result.deleteObjectStore(objectStoreName))
    
    e.target.result.createObjectStore('chore', {autoIncrement: true});
    connectionIndex = e.target.result;
        
}

request.onsuccess = e => {
    console.log('Conexão foi um sucesso')
    connectionIndex = e.target.result;
}

request.onerror = e => {
    console.log(e)
    connectionIndex = '';
}

export default class ConnectionFactory {
    
    constructor() {
        throw new Error('Você não deve criar um objeto desse tipo')
    }

    static createConnection() {
        
        connectionIndex.close = function() {
            console.log('Você não pode fechar essa coneção')
        }

        if(!connectionIndex) 
            throw new Error('Não foi possível conectar ao IndexDB')

        return connectionIndex;
    }

}