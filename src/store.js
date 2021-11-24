import data from "./data";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";



// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }


const initialState = {};

const reducer = (state, action) => {
    return {products: data.products}
};

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const stores = createStore(reducer, initialState, composeEnhanser(applyMiddleware(thunk)));

export default stores;