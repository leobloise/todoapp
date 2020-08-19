class Chore {

    constructor(title, activity, timeFrom, timeDayFrom, timeTo, timeDayTo, description) {

        this._title = title;
        this._activity = activity;
        this._timeFrom = timeFrom;
        this._timeDayFrom = new Date(timeDayFrom);
        this._timeTo = timeTo;
        this._timeDayTo = timeDayTo;
        this._description = description;
        
        Object.freeze(this);
    }

    get title() {
        return this._title;
    }

    get activity() {
        return this._activity;
    }

    get timeFrom() {
        return this._timeFrom;
    }

    get timeDayFrom() {
        return new Date(this._timeDayFrom);
    }

    get timeTo() {
        return this._timeTo;
    }

    get timeDayTo() {
        return new Date(this._timeDayTo);
    }


    get description() {
        return this._description;
    }

}