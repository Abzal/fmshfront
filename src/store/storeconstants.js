/**auth*/
export const LOGIN_ACTION = '[actions] login user';
export const LOGOUT_ACTION = '[actions] logout user';
export const AUTH_ACTION = '[actions] do user auth';
export const AUTO_LOGIN_ACTION = '[actions] auth auto login';
export const AUTO_LOGOUT_ACTION = '[actions] auth auto logout';
export const SET_AUTO_LOGOUT_MUTATION = '[mutations] set auto logout';
export const SET_USER_DATA_MUTATION = '[mutations] set user data';
export const GET_USER_DATA_GETTER = '[getters] auth user data';
export const GET_USER_TOKEN_GETTER = '[getters] auth user token';
export const IS_USER_AUTHENTICATE_GETTER = '[getters] is user authenticated';

/**form*/
export const FETCH_TEACHERS_ACTION = '[actions] fetch all teachers';
export const GET_TEACHERS_GETTER = '[getters] get all teachers';
export const SET_TEACHERS_MUTATION = '[mutations] set all teachers';