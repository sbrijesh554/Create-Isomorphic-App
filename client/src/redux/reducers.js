import {combineReducers} from 'redux';

import {reducer} from '../components/Home/reducer'

export const reducers = combineReducers({
    sampledata: reducer
})