class MessageView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        this._element.style.display = 'block';
        setTimeout(() => {
            this._element.style.display = 'none';
        }, 5000);
        return `<p> ${model.text} </p>`;
    }
}