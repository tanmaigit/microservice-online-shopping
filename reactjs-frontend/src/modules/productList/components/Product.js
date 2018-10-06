import React from 'react';
import { Link } from 'react-router-dom';
class Product extends React.Component {
	render() {
		const { id, name, price } = this.props.data;
		return (
			<div className="col-12 col-md-6 col-lg-4 product-item">
			  <div className="card">
				<img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" />
				<div className="card-body">
				  <h4 className="card-title"><Link to={'/product/' + id}>{name}</Link></h4>
				  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  <div className="row">
					<div className="col">
					  <p className="btn btn-danger btn-block">{price} $</p>
					</div>
					<div className="col">
					  <a href="#" className="btn btn-success btn-block">Add to cart</a>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		);
	}
}

export default Product;
