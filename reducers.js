import {combineReducers} from 'redux';
import {reducer} from './components/reducer';


export const reducers = combineReducers({
    sampledata : reducer,
    randomData: reducer
})