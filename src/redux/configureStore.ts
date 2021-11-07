import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "../utils/history";
const rootReducerCom = combineReducers({
  router: connectRouter(history),
  rootReducer,
});
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware, routerMiddleware(history)];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;
