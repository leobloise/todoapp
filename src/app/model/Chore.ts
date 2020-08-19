import Time from './interfaces/Time';

class Chore {
    
    private title: string;
    private activity: string;
    private from: Time;
    private to: Time;
    private description: string;

    constructor(title: string, activity: string, from: Time, to: Time, description: string) {

        this.title = this.verifyTitle(title);
        this.activity = activity || 'Other';
        this.from = this.verifyIfNull(JSON.stringify(from));
        this.to = this.verifyToTime(this.verifyIfNull(JSON.stringify(to)));
        this.description = description || 'There\'s not any description';
    }

    private verifyIfNull(value: string) {
        if(!value) {
            throw new Error(`${value} must not be empty`);
        }

        return JSON.parse(value);
    }

    /**
     * @method verifyToTime
     * @param time: time
     * 
     * It'll check if chore is today or future and then apply another validations.
     */
    private verifyToTime(time: Time) {

        if(time.date.getTime() === this.from.date.getTime()){
            if(Number(time.hour) < Number(this.from.hour)) {
                throw new Error('You can not do something in the past')
            } else {
                return time;
            }
        }

        if(time.date.getTime() < this.from.date.getTime()) {
            throw new Error('You can not do something in the past')
        } else {
            return time;
        }
    
    }

    /**
     * @method verifyTitle
     * @param title: string
     * 
     * It'll check if title is empty;
     */
    private verifyTitle(title: string) {
        if(!title) {
            throw new Error('You must name your chores');
        }

        return title;
    }

    get minutesFrom() {
        return this.from.minutes;
    }

    get hourFrom() {
        return this.from.hour;
    }

    get fullTimeFrom() {
        return `${this.from.hour}:${this.from.minutes}`;
    }
    
    get fromDate() {
        return new Date(this.from.date);
    }

    get minutesto() {
        return this.to.minutes;
    }

    get hourto() {
        return this.to.hour;
    }

    get fulltimeto() {
        return `${this.to.hour}:${this.to.minutes}`;
    }
    
    get toDate() {
        return new Date(this.to.date);
    }

    get titleChore() {
        return this.title;
    }

    get activityChore() {
        return this.activity;
    }

    get descriptionChore() {
        return this.description;
    }
}

export default Chore;