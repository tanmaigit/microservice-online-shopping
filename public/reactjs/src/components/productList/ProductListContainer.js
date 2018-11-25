import { connect } from 'react-redux';
import React from 'react';
import PropTypes from "prop-types";
import ProductList from './ProductList';
import { actionGetProductList } from './actions';

class ProductListContainer extends React.Component {
	componentDidMount() {
		this.props.getProductList('us');
	}

	render() {
		const { products } = this.props;
		const productListTemplate = products.map(productData => {
			return <ProductList key={productData.id} data={productData} />;
		});
		return <div className="col"><div className="row">{productListTemplate}</div></div>;
	}
}

ProductListContainer.propTypes = {
  products: PropTypes.array.isRequired,
  getProductList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	products: state.productList.products
});

const mapDispatchToProps = dispatch => ({
	getProductList: filter => dispatch(actionGetProductList(filter))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductListContainer);
