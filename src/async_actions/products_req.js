import { allProductsAction, allDiscountProductAction, allProductInfoAction } from "../store/reducers/productReducer";

export const getProducts = () => {
    return dispatch => {
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(json => {
                const new_json = json.map(el => ({ ...el, show: true }));
                dispatch(allProductsAction(new_json));
            })
    };
};

export const getDiscountProduct = () => {
    return dispatch => {
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(json => dispatch(allDiscountProductAction(json)));
    };
};

export const getProductInfo = id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
            .then(res => res.json())
            .then(json => dispatch(allProductInfoAction(json[0])));
    };
};
