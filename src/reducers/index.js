import { combineReducers } from 'redux';
import SourceReducer from './sourceReducer';

const rootReducer = combineReducers({
  source: SourceReducer
});

export default rootReducer;