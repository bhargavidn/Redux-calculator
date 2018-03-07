import { combineReducers } from 'redux';

import Value from './reducer_calc';

const rootReducer = combineReducers({
    value:Value
});

export default rootReducer;
