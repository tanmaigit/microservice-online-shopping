import React from 'react';

const TopHeader = () => (
	<div>
	  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
		<div className="container">
		  <a className="navbar-brand" href="index.html">Simple Ecommerce</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon" />
		  </button>
		  <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
			<ul className="navbar-nav m-auto">
			  <li className="nav-item">
				<a className="nav-link" href="index.html">Home</a>
			  </li>
			  <li className="nav-item active">
				<a className="nav-link" href="category.html">Categories <span className="sr-only">(current)</span></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="product.html">Product</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="cart.html">Cart</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="contact.html">Contact</a>
			  </li>
			</ul>
			<form className="form-inline my-2 my-lg-0">
			  <div className="input-group input-group-sm">
				<input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..." />
				<div className="input-group-append">
				  <button type="button" className="btn btn-secondary btn-number">
					<i className="fa fa-search" />
				  </button>
				</div>
			  </div>
			  <a className="btn btn-success btn-sm ml-3" href="cart.html">
				<i className="fa fa-shopping-cart" /> Cart
				<span className="badge badge-light">3</span>
			  </a>
			</form>
		  </div>
		</div>
	  </nav>
	  <section className="jumbotron text-center">
		<div className="container">
		  <h1 className="jumbotron-heading">E-COMMERCE CATEGORY</h1>
		  <p className="lead text-muted mb-0">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte...</p>
		</div>
	  </section>
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
	</div>
);
export default TopHeader;
