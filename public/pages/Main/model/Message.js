class Message {
    
    constructor(msg = '') {
        this._message = msg;
    }

    get text() {
        return this._message
    }

    set text(value) {
        this._message = value;
    }
}