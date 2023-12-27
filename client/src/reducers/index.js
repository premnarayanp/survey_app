import auth from './authReducer';
import surveyReducer from './surveyReducer'
import {combineReducers} from 'redux';

//using predefined redux combined reducers,All another reducer will be combined here
export default combineReducers({
  auth,
  surveyReducer
});
  


