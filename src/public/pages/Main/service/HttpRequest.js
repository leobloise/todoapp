export class HttpRequest {
    
    constructor() {
        throw new Error('Você não deve instanciar essa classe');
    }

    static post(url, content) {
        return new Promise((resolve, reject) => {

            let xml = new XMLHttpRequest();

            xml.open('POST', url)

            xml.onreadystatechange = (e) => {
                if(xml.readyState === 4) {
                    if(xml.status === 200) 
                        return resolve(xml.responseText);
                    else 
                        return reject('A requisição não foi bem sucedida');
                }
            }

            xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xml.send(content)
            
        })
    }
    
    static get(url) {
        return new Promise((resolve, reject) => {
            
            let xml = new XMLHttpRequest();
            
            xml.open('GET', url)

            xml.onreadystatechange = (e) => {
                if(xml.readyState === 4) {
                    if(xml.status === 200) 
                        return resolve(xml.responseText)
                    else 
                        return reject('A requisição não foi bem sucedida');
                }
            }

            xml.send();
        
        })
    }

    static delete(url) {
        //terminar isso aqui depois
    }
}