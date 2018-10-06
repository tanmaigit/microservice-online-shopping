import * as action from './actionTypes';

function getProductList(filter) {
	return new Promise((resolve, reject) => {
		const products = [
			{ id: 'p1', name: '[Toyota]' + filter, price: '10000' },
			{ id: 'p2', name: '[Audi]' + filter, price: '50000' },
			{ id: 'p3', name: '[Volkswagen]' + filter, price: '20000' }
		];
		resolve(products);
	});
}

export const actionGetProductList = filter => {
	return dispatch => {
		getProductList(filter).then(response => {
			dispatch({ type: action.GET_PRODUCT_LIST, payload: response });
		});
	};
};
