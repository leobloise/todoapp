export class HttpRequest {
    
    constructor() {
        throw new Error('Você não deve instanciar essa classe');
    }

    static post(url, content) {

        let xml = new XMLHttpRequest();

        xml.open('POST', url)

        xml.onreadystatechange = (e) => {
            if(xml.readyState === 4) {
                if(xml.status === 200) 
                    return xml.responseText;
                else 
                    return 'Houve um erro na comunicação com o servidor'
            }
        }

        xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xml.send(content)
    }
}