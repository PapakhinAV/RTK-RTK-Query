import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import todoReducer from './todoSlice';
import {todoApi} from "./todoApi";

const rootReducer = combineReducers({
	todos: todoReducer,
	[todoApi.reducerPath]: todoApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat([todoApi.middleware]),
});

setupListeners(store.dispatch)
