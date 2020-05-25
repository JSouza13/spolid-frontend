import { combineReducers } from 'redux';

import auth from './auth/reducer';
import course from './course/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
  course,
});
