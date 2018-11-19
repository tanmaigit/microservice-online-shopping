import * as productDetailAction from './actionTypes';

import axios from 'axios';

const apiUrl = 'http://localhost:2000/api';
const config = {
	withCredentials: true
};

function getProduct(productId) {
	return axios.get(`${apiUrl}/product/${productId}`, config)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			throw(error);
		}
	);
}

export const actionGetProduct = (productId) => {
	return dispatch => {
		getProduct(productId).then(response => {
			dispatch({ type: productDetailAction.GET_PRODUCT_DETAIL, payload: response });
		});
	};
};
