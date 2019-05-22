import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Work from './Work';
import Home from './Home';
import Settings from './Settings';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
	state = {
		symbols: [],
		actualSymbol: ''
	};

	handleButtonClick(buttonLabel) {
		const symbol = buttonLabel;

		this.setState({
			actualSymbol: symbol,
			symbols: [...this.state.symbols, symbol]
		});
		if (this.state.symbols.length % 4 === 0) {
			this.sliceArray(this.state.symbols);
		}
	}

	sliceArray(array) {
		let slicedArray = [];

		for (let i = 0; i < array.length; i += 4) {
			slicedArray.push(array.slice(i, 4));
		}
		return slicedArray;
	}

	render() {
		return (
			<main>
				<Header />
				<section>
					<Switch>
						<Route
							path='/work'
							render={props => (
								<Work
									symbols={this.state.symbols}
									handleButtonClick={buttonLabel =>
										this.handleButtonClick(buttonLabel)
									}
									{...props}
								/>
							)}
						/>
						<Route exact path='/home' component={Home} />
						<Route exact path='/settings' component={Settings} />
						<Route path='/not-found' component={() => <h1>Not Found</h1>} />
						<Redirect from='/' to='/not-found' />
					</Switch>
				</section>
				<Footer />
			</main>
		);
	}
}
