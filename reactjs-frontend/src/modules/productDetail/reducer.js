import * as productDetailAction from './actionTypes';

const initialState = {
	product: {}
};

const productDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case productDetailAction.GET_PRODUCT_DETAIL:
			return { product: action.payload };
		default:
			return state;
	}
};
export default productDetailReducer;
