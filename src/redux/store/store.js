// setup a redux store and which hold the state of the application

import { createStore } from "react-redux";
import counterReducer from "../reducer/counterReducer";

export const store = createStore(counterReducer);
