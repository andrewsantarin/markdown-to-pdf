import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
// import { reducer as notifications } from 'react-notification-system-redux';

// import app from './app/reducer';
// import order from './order/reducer';
// import tour from './tour/reducer';
// import user from './user/reducer';

const rootReducer = combineReducers({
  // app,
  // order,
  // tour,
  // user,
  form,
  // notifications,
});

export default rootReducer;
