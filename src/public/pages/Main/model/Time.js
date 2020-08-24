/**
 * @constructor (month, day, year, hour, minute)
 */

export default class Time {

    constructor(month, day, year, hour, minute) {
        this._month = this._verifyMonth(month);
        this._day = this._verifyDay(day);
        this._year = this._verifyYear(year);
        this._hour = this._verifyHour(hour);
        this._minute = this._verifyMinute(minute);
    }

    /**
     * 
     * @method _verifyMonth(month: number): month
     * @param month mês que se deseja registrar
     * @summary Verifica se é um mês entre 1 ou 12
     *  
     */
    _verifyMonth(month) {
        if(month < 1 || month > 12) 
            throw new Error('Mês inválido');
        
        return month;
    }

    /**
     * 
     * @method _verifyDay(day: number): day
     * @param day Dia que se deseja registrar
     * @summary Verifica se é um dia entre 1 e 31.
     */

    _verifyDay(day) {
        if(day < 1 || day > 31)
            throw new Error('Dia inválido');

        return day;
    }


    /**
     * 
     * @method _verifyYear(year: number): day
     * @param year Ano que se deseja registrar
     * @summary Verifica se é um ano válido.
     */
    
    _verifyYear(year) {
        if(year < 0)
            throw new Error('Ano inválido');

        return year;
    }

    /**
     * 
     * @method _verifyHour(hour: number): hour
     * @param hour Hora que se deseja registrar
     * @summary Verifica se é uma hora válido.
     */

    _verifyHour(hour) {
        if(hour < 0 || hour > 23)
            throw new Error('Hora inválido');

        return hour;
    }

      /**
     * 
     * @method _verifyMinute(minute: number): minute
     * @param minute Minuto que se deseja registrar
     * @summary Verifica se é um minuto válido.
     */


    _verifyMinute(minute) {
        if(minute < 0 || minute > 59) 
            throw new Error('Minuto inválido')
        
        return minute;
    }

    /**
     * @method constructDateFromTime(): Date
     * @param void 
     * @returns Date object from Time object
     * @summary Constroi um objeto data a partir de um objeto Time.
     */

    constructDateFromTime() {
        return new Date(this._year, 
            this._month,
            this._day,
            this._hour,
            this._minute)
    }

    
    /**
     * @method isItPast(date: Date): boolean
     * @param Date 
     * @returns True or false
     * @summary Verifica se o objeto passado está no passado. Isso é feito levando a data do objeto Time
     * utilizado em consideração.
     */

    isItPast(date) {
        if(date.getTime() > this.constructDateFromTime().getTime())
            return false;
        
        return true;
    }

}