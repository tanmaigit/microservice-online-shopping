import React, { Component } from 'react';
import store from './store';
import Header from './components/Header/Header';
import MainRouter from './router';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="wrapper">
					<Header />
					<Router>
						<MainRouter />
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
