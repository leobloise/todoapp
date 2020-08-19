class HttpService {

    constructor() {
        throw new Error('You must not construct it');
    }
    
    static post(url, content = {}) {

        return new Promise((resolve, reject) => {

            let request = new XMLHttpRequest();
            request.open('POST', url);

            request.onreadystatechange = () => {
                if(request.readyState  === 4) {
                    request.status === 200?resolve(request.responseText):reject(request.responseText);
                }
            }

            request.setRequestHeader('Content-Type', 'application/json');
            request.send(content);
        });

    }

}
