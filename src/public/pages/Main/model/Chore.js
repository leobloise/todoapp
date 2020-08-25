import StringUtils from '../helpers/StringUtils.js'
import Time from '../model/Time.js';

export default class Chore {

        constructor(id,temptitle, activity, timeFrom, timeDayFrom, timeTo, timeDayTo, description) {
            this._timeTo;
            this._timeFrom;
            this._title = this._verifyTitle(temptitle);
            this._activity = activity || 'Nulo';
            this._description = description || 'Nulo';
            this._initializeValues(timeFrom, timeDayFrom, timeTo, timeDayTo)
            Object.freeze(this);
        }

        _initializeValues(timeFrom, timeDayFrom, timeTo, timeDayTo) {

            let temptimeFrom;
            let temptimeTo;

            const  FROMhourAndMinutes = StringUtils.splitString(':', timeFrom);
            const  FROMyearMonthDate = StringUtils.splitString('-', timeDayFrom);
            const TOhourAndMinutes = StringUtils.splitString(':', timeTo);
            const  TOyearMonthDate = StringUtils.splitString('-', timeDayTo);

            try {
                
                temptimeFrom = new Time(FROMyearMonthDate[1], 
                    FROMyearMonthDate[2], 
                    FROMyearMonthDate[0],
                    FROMhourAndMinutes[0],
                    FROMhourAndMinutes[1])

                temptimeTo = new Time(TOyearMonthDate[1], 
                    TOyearMonthDate[2], 
                    TOyearMonthDate[0],
                    TOhourAndMinutes[0],
                    TOhourAndMinutes[1])

                if(temptimeTo.isItPast(temptimeFrom.constructDateFromTime())) {
                    this._timeTo = temptimeTo;
                    this._timeFrom = temptimeFrom;
                } else {
                    throw new Error('Você não pode ter um evento que começa no futuro');
                }

            } catch(e) {

                throw new Error(e);
            
            }
        }

        _verifyTitle(title) {
            if(!title)
                throw new Error('Deve haver um título');
            
            if(title.length < 4 )
                throw new Error('O título deve haver mais de ou 4 caracteres'); 
            
            return title;
        }

        get title() {
            return this._title;
        }

        get dayFrom(){
            return this._timeFrom.constructDateFromTime().getDate();
        }

        get monthFrom() {
            return this._timeFrom.constructDateFromTime().getMonth();
        }

        get FullYearFrom() {
            return this._timeFrom.constructDateFromTime().getFullYear();
        }

        get hoursFrom() {
            return this._timeFrom.constructDateFromTime().getHours();
        }

        get minutesFrom() {
            return this._timeFrom.constructDateFromTime().getMinutes();
        }

        get hourAndMinutesFrom() {
            return `${this.hoursFrom}:${this.minutesFrom}`
        }
        get formattedDateFrom() {
            return `${this.dayFrom}\\${this.monthFrom}\\${this.FullYearFrom}`
        }

        get dayTo(){
            return this._timeTo.constructDateFromTime().getDate();
        }

        get monthTo() {
            return this._timeTo.constructDateFromTime().getMonth();
        }

        get FullYearTo() {
            return this._timeTo.constructDateFromTime().getFullYear();
        }

        get hoursTo() {
            return this._timeTo.constructDateFromTime().getHours();
        }

        get minutesTo() {
            return this._timeTo.constructDateFromTime().getMinutes();
        }

        get formattedDateTo() {
            return `${this.dayTo}\\${this.monthTo}\\${this.FullYearTo}`
        }

        get hourAndMinutesTo() {
            return `${this.hoursTo}:${this.minutesFrom}`
        }

        get activity() {
            return this._activity;
        }

        get description() {
            return this._description;
        }
}
