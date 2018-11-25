import { combineReducers } from 'redux';
import productList from './components/productList/reducer';
import productDetail from './components/productDetail/reducer';

export default combineReducers({ productList, productDetail });