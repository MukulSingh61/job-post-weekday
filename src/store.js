import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/dataReducer'; // Import root reducer that combines all reducers

// Create Redux store using configureStore
const store = configureStore({
  reducer: rootReducer, // Pass the root reducer to configureStore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Optional: customize middleware
});

export default store;
