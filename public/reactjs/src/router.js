import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from './components/Body/Body';
import ProductDetail from './components/productDetail/ProductDetailContainer';

const MainRouter = () => (
	<div className="content">
		<Switch>
		  <Route exact path='/' component={Body}/>
		  <Route path='/product/:productId' component={ProductDetail}/>
		</Switch>
	</div>
);

export default MainRouter;
