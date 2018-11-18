import * as productDetailAction from './actionTypes';

function getProduct(productId) {
	return new Promise((resolve, reject) => {
		const products = {
			'p1': { id: 'p1', name: '[Toyota]Detail', price: '10000' },
			'p2': { id: 'p2', name: '[Audi]Detail', price: '50000' },
			'p3': { id: 'p3', name: '[Volkswagen]Detail', price: '20000' }
		};
		resolve(products[productId]);
	});
}

export const actionGetProduct = (productId) => {
	return dispatch => {
		getProduct(productId).then(response => {
			dispatch({ type: productDetailAction.GET_PRODUCT_DETAIL, payload: response });
		});
	};
};
