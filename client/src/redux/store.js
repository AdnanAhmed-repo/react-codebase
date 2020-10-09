import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { UserReducer } from "./reducers/user_reducer";

export const store = createStore(
	UserReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
