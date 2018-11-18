import * as productListAction from './actionTypes';

const initialState = {
	products: []
};

const productListReducer = (state = initialState, action) => {
	switch (action.type) {
		case productListAction.GET_PRODUCT_LIST:
			return { products: action.payload };
		default:
			return state;
	}
};
export default productListReducer;
