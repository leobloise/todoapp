export default class View {
    constructor(element) {
        this._element = element
    }


    template(model) {
        throw new Error();
    }


    update(model) {
        this._element.innerHTML = this.template(model)
    }
}