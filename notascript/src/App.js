import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Work from './Work.js';
import Home from './Home.js';
import CreateDocument from './CreateDocument';
import Settings from './Settings.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import DocumentDetailView from './DocumentDetailView.js';

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
						<Route
							path='/create'
							render={props => (
								<CreateDocument
									handleButtonClick={buttonLabel =>
										this.getSymbolsFromButtons(buttonLabel)
									}
									{...props}
								/>
							)}
						/>
						<Route exact path='/home' component={Home} />
						<Route exact path='/create' component={CreateDocument} />
						<Route exact path='/settings' component={Settings} />
						<Route exact path='/details' component={DocumentDetailView} />
						<Route path='/not-found' component={() => <h1>Not Found</h1>} />
						<Redirect from='/' to='/not-found' />
					</Switch>
				</section>
				<Footer />
			</main>
		);
	}
}
