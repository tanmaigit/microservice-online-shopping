import { combineReducers } from 'redux';
import productList from './modules/productList/reducer';
import productDetail from './modules/productDetail/reducer';

export default combineReducers({ productList, productDetail });