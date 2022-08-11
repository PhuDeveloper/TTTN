import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import  AccountReducer  from "./reduce/AccountReduce";
import WorkReducer   from "./reduce/WorkReduce";
import RootSaga from "./saga/RootSaga";


const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
    reducer: {
      account:AccountReducer,
      work:WorkReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(RootSaga);