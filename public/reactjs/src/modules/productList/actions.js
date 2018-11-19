import * as action from './actionTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:2000/api';
const config = {
	withCredentials: true
};

function getProductList(filter) {
	return axios.get(`${apiUrl}/products`, config)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			throw(error);
		}
	);
}

export const actionGetProductList = filter => {
	return dispatch => {
		getProductList(filter).then(response => {
			dispatch({ type: action.GET_PRODUCT_LIST, payload: response });
		});
	};
};
