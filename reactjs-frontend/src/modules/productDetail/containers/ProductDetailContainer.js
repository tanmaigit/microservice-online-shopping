import { connect } from 'react-redux';
import React from 'react';
import PropTypes from "prop-types";
import ProductDetail from '../components/ProductDetail';
import { actionGetProduct } from '../actions';

class ProductDetailContainer extends React.Component {
	componentDidMount() {
		const { productId } = this.props.match.params;
		this.props.getProduct(productId);
	}

	render() {
		return <ProductDetail data={this.props.product} />;
	}
}

ProductDetailContainer.propTypes = {
  product: PropTypes.object.isRequired,
  getProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return { product: state.productDetail.product };
};

const mapDispatchToProps = dispatch => ({
	getProduct: productId => dispatch(actionGetProduct(productId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductDetailContainer);
