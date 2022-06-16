import { configureStore } from '@reduxjs/toolkit';

import { auth } from './auth-slice';
import { counter } from './counter-slice';

const store = configureStore({
  reducer: {
    auth,
    counter,
  },
});

export default store;
