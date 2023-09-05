const SET_PRODUCT = '[PRODUCT] SET_PRODUCT';
const UPDATE_PRODUCT = '[PRODUCT] UPDATE_PRODUCT';

export const setProductAction = payload => ({type: SET_PRODUCT, payload});
export const updateProductAction = payload => ({type: UPDATE_PRODUCT, payload});

let defaultState = {
  id: null,
  title: '',
  price: null,
  discount_price: null,
  description: '',
  image: '',
  createdAt: '',
  updatedAt: '',
  categoryId: null
};

export const productCurrentReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_PRODUCT:
      return {...action.payload};
    case UPDATE_PRODUCT:
      return {...state, ...action.payload};
    default:
      return state;
  }
};