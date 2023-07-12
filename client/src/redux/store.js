import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["user"]
};


const rootReducer = combineReducers({
    user
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});
  
export default store;