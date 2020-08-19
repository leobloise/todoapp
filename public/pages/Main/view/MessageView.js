class MessageView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        return `<h1> ${model.text} </h1>`;
    }
}