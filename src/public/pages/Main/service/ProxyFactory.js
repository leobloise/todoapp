export default class ProxyFactory {

    constructor() {
        throw new Error('You should not do it');
    }

    static create(object, view, traps) {
        ;
        return new Proxy(object,{
            
            set(target, prop, value, reciever) {
                
                if(traps.includes(prop)) {
                        Reflect.set(target, prop, value, reciever);
                        view.update(target);
                }

                return Reflect.set(target, prop, value, reciever);
            },

            get(target, prop, reciever) {

                if(traps.includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        view.update(target);
                    }
                }

                return Reflect.get(target, prop, reciever);
            }
     
        })
    }
}