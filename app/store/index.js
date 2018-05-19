import {createStore,compose} from 'redux';
import {AsyncStorage} from 'react-native'
import {persistStore,autoRehydrate} from 'redux-persist'

import reducer from '../reducer';


let  defaultState =  {
} 

export let configureStore = (initialState = defaultState) =>{
    let  store  =  createStore(reducer,initialState); 
     return  store;
} 