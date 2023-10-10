export default class Validations {
    static emptyValue(text){
        if(text.length > 0){
            return true;
        }
        return false;
    }
    static checkEmail(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return true;
        }
        return false;
    }
    static minLength(name, minLength){
        if(name.length < minLength){
            return false;
        }
        return true;
    }
    static checkIsLocaleStringEmpty(obj){
        if(!obj.kz)
            return 'Заполните поле "KZ"';
        if(!obj.ru)
            return 'Заполните поле "RU"';
        if(!obj.en)
            return 'Заполните поле "EN"';
        else return null;
    }
    static checkIsEmpty(obj){
        switch (typeof obj) {
            case "object":
                if (obj == null)
                    return "Поле является обязательным для заполнения";
                else return null;
            case "number":
                if(obj === 0)
                    return "Поле является обязательным для заполнения";
                else return null;
            case "string":
                if(!(obj.length > 0))
                    return "Поле является обязательным для заполнения";
                else return null;
            case "undefined":
                return "Поле является обязательным для заполнения";
            default: return null;
        }
    }
    static checkIsArrayEmpty(arr){
            if(arr && arr?.length > 0)
                return null;
            else return 'Необходимо выбрать значения'
    }
}