import {reducer as formReducer} from 'redux-form';
import  {combineReducers} from 'redux';
import  AuthFirebase from './Authfirebase'


module.exports = combineReducers({
 form:formReducer,
 auth:AuthFirebase
});