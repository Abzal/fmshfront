import Validations from "@/services/Validations";

export default class LoginValidation{

    checkPasswordValidations(password) {
        let errors = {};
        if(!Validations.emptyValue(password)){
            errors['password'] = 'Данное поле обязательно для заполнения'
        }/*else if (!Validations.minLength(this.password,6)){
            errors['password'] = 'Password should be of 6 chars'
        }*/
        return errors;
    }

    checkEmailValidations(email) {
        let errors = {};
        if(!Validations.emptyValue(email)){
            errors['email'] = 'Данное поле обязательно для заполнения'
        }else if (!Validations.checkEmail(email)){
            errors['email'] = 'Неверно указан логин или email'
        }
        return errors;
    }

    static getErrorMessageFromCode(errorCode){
        switch (errorCode) {
            case 'EMAIL_NOT_FOUND':
                return {email:'Логин или email не найдена'};
            case 'INVALID_PASSWORD':
                return {password:'Неверно указан пароль'};
            default:
                return {password:errorCode,email:errorCode};
        }
    }
}