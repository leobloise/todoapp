import Time from './Time';
import StringUtils from '../services/StringUtils'

export default class Chore {

        private _timeTo?: Time
        private _timeFrom?: Time;
        private _title: string
        private _activity: string
        private _description: string

        constructor(temptitle: string, timeFrom: string, timeDayFrom: string, timeTo: string, timeDayTo: string,activity?: string, description?: string) {
            this._title = this._verifyTitle(temptitle);
            this._activity = activity || 'Nulo';
            this._description = description || 'Nulo';
            this._initializeValues(timeFrom, timeDayFrom, timeTo, timeDayTo)
        }

        _initializeValues(timeFrom: string, timeDayFrom: string, timeTo: string, timeDayTo: string) {

            let temptimeFrom: Time;
            let temptimeTo: Time;

            const  FROMhourAndMinutes: Array<string> = StringUtils.splitString(':', timeFrom);
            const  FROMyearMonthDate: Array<string>  = StringUtils.splitString('-', timeDayFrom);
            const TOhourAndMinutes:  Array<string>  = StringUtils.splitString(':', timeTo);
            const  TOyearMonthDate:  Array<string>  = StringUtils.splitString('-', timeDayTo);

            try {
                
                temptimeFrom = new Time(Number(FROMyearMonthDate[1]), 
                Number(FROMyearMonthDate[2]), 
                Number(FROMyearMonthDate[0]),
                Number(FROMhourAndMinutes[0]),
                Number(FROMhourAndMinutes[1]))

                temptimeTo = new Time(Number(TOyearMonthDate[1]), 
                Number(TOyearMonthDate[2]), 
                Number(TOyearMonthDate[0]),
                Number(TOhourAndMinutes[0]),
                Number(TOhourAndMinutes[1]))

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

        _verifyTitle(title: string) {
            if(!title)
                throw new Error('Deve haver um título');
            
            if(title.length < 4 )
                throw new Error('O título deve haver mais de ou 4 caracteres'); 
            
            return title;
        }

        get title() {
            return this._title;
        }

        get timeTO() {
            return this._timeTo;
        }

        get timeFROM() {
            return this._timeFrom;
        }

        get activity() {
            return this._activity;
        }

        get description() {
            return this._description;
        }
}
