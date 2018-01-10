import {combineReducers} from 'redux';

import list from './list_reducer'
import detail from './detail_reducer';

const state = combineReducers({
    list:list,
    detail:detail
});

export default state;