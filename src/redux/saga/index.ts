import { all } from "@redux-saga/core/effects";
import taskSaga from "./Task";
export default function* rootSaga() {
  yield all([taskSaga()]);
}
