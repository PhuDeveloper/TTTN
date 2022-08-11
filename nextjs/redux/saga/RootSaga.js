import { all } from "redux-saga/effects"
import AccountSaga from "./AccountSaga"
import WorkSaga from "./WorkSaga"



export default function* RootSaga() {
    yield all([
      AccountSaga(),
      WorkSaga()
    ])
}