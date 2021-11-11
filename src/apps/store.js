import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../stores/counter";

import storage from 'redux-persist/lib/storage'

import { persistReducer,persistStore } from 'redux-persist'

import {combineReducers} from 'redux';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  counter: counterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;
