import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'spolid',
      storage,
      whitelist: ['auth', 'user', 'course'],
    },
    reducers
  );

  return persistedReducer;
};
