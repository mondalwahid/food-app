import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {foodApi} from './foods';
import {addFoodApi} from './addFoodSlice';
import dummySliceReducer from './dummySlice';

export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
    [addFoodApi.reducerPath]: addFoodApi.reducer,
    dummyData: dummySliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(foodApi.middleware)
      .concat(addFoodApi.middleware),
});
setupListeners(store.dispatch);
