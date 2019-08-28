import {combineReducers} from 'redux';

import {reducer} from '../Home/reducer'

export const reducers = combineReducers({
    sampledata: reducer
})