import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Work from './Work';
import Home from './Home';
import Settings from './Settings';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

export default class App extends Component {
	state = {
		symbols: [],
		actualSymbol: ''
	};

	getSymbolsFromButtons(buttonLabel) {
		const symbol = buttonLabel;

		this.setState({
			actualSymbol: symbol,
			symbols: [...this.state.symbols, symbol]
		});
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
										this.getSymbolsFromButtons(buttonLabel)
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
