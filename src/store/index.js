import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoryReducer } from './reducers/categoryReducer'
import { productReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import { productCurrentReducer } from './reducers/currentProductReducer'





const rootReducer= combineReducers({
     categories: categoryReducer,
     allproducts: productReducer,
     allcart: cartReducer,    
     currentProduct: productCurrentReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))