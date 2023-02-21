import { configureStore } from '@reduxjs/toolkit';

import projectReducer from './project/slice';

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
