import { productDetailsReducer, productListReducer } from "reducers/productsReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailsReducer,
});

// const reducer = (state, action) => {
//     return{ products: data.products};
// }


// @ts-ignore
const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const stores = createStore(reducer, initialState, composeEnhanser(applyMiddleware(thunk)));

export default stores;