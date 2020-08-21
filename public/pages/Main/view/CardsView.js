class CardsView extends View{
    constructor(element) {
        super(element);
    }

    template(models) {
        
        return models.chores.map(model => `
        <section class="card">
                        <header class="cardheader">
                            <div class="cardheader_content">
                                <h1> ${model.title} </h1>
                                <span> ${model.formattedDateFrom} - ${model.hourAndMinutesFrom} => ${model.formattedDateTo} - ${model.hourAndMinutesTo} </span><br>
                                <span> ${model.activity} </span>
                            </div>
                        </header>
                        <main class="cardbody">
                            <div class="cardbody_content">
                                <p>${model.description}</p>
                            </div>
                        </main>
                    </section>
        ` ).join('');
        
    }
}