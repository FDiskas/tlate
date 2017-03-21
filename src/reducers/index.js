import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import notification from './notificationReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  notification
});

export default rootReducer;
