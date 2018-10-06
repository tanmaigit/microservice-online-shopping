import React from 'react';
import ProductListContainer from '../../modules/productList/containers/ProductListContainer';

const Body = () => (
	<div className="body">
	  <div className="container">
		<div className="row">
		  <div className="col">
			<nav aria-label="breadcrumb">
			  <ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="index.html">Home</a></li>
				<li className="breadcrumb-item"><a href="category.html">Category</a></li>
				<li className="breadcrumb-item active" aria-current="page">Sub-category</li>
			  </ol>
			</nav>
		  </div>
		</div>
	  </div>
	  <div className="container">
		<div className="row">
		  <div className="col-12 col-sm-3">
			<div className="card bg-light mb-3">
			  <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-list" /> Categories</div>
			  <ul className="list-group category_block">
				<li className="list-group-item"><a href="category.html">Cras justo odio</a></li>
				<li className="list-group-item"><a href="category.html">Dapibus ac facilisis in</a></li>
				<li className="list-group-item"><a href="category.html">Morbi leo risus</a></li>
				<li className="list-group-item"><a href="category.html">Porta ac consectetur ac</a></li>
				<li className="list-group-item"><a href="category.html">Vestibulum at eros</a></li>
			  </ul>
			</div>
			<div className="card bg-light mb-3">
			  <div className="card-header bg-success text-white text-uppercase">Last product</div>
			  <div className="card-body">
				<img className="img-fluid" src="https://dummyimage.com/600x400/55595c/fff" />
				<h5 className="card-title">Product title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<p className="bloc_left_price">99.00 $</p>
			  </div>
			</div>
		  </div>
		  <div className="col">
			<div className="row">
			  <ProductListContainer />
			  <div className="col-12">
				<nav aria-label="...">
				  <ul className="pagination">
					<li className="page-item disabled">
					  <a className="page-link" href="#" tabIndex={-1}>Previous</a>
					</li>
					<li className="page-item"><a className="page-link" href="#">1</a></li>
					<li className="page-item active">
					  <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
					</li>
					<li className="page-item"><a className="page-link" href="#">3</a></li>
					<li className="page-item">
					  <a className="page-link" href="#">Next</a>
					</li>
				  </ul>
				</nav>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
);

export default Body;
