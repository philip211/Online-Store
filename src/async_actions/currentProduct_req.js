import { setProductAction, updateProductAction } from "../store/reducers/currentProductReducer";

export const getProduct = id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
            .then(res => res.json())
            .then(json => dispatch(setProductAction(json[0])));
    };
};

export const updateProduct = (id, updatedFields) => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFields),
        })
        .then(res => res.json())
        .then(json => dispatch(updateProductAction(json)));
    };
};