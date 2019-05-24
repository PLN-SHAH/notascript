import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Work from './Work.js';
import Home from './Home.js';
import CreateDocument from './CreateDocument';
import Settings from './Settings.js';
import { Route, Switch } from 'react-router-dom';
import DocumentDetailView from './DocumentDetailView.js';

export default class App extends Component {
	state = {
		symbols: [],
		actualSymbol: '',
		documents: [
			{
				title: 'filename1',
				description: 'some description for filename1',
				domains: ['domainx', 'domainy', 'domainz']
			},
			{
				title: 'filename2',
				description: 'some description for filename2',
				domains: ['domain1', 'domain2', 'domain3']
			},
			{
				title: 'filename3',
				description: 'some description for filename3',
				domains: ['domain_a', 'domain_b', 'domain_c']
			}
		]
	};

	getSymbolsFromButtons(buttonLabel) {
		const symbol = buttonLabel;

		this.setState({
			actualSymbol: symbol,
			symbols: [...this.state.symbols, symbol]
		});
	}

	showDetailPage(documents, documentTitle) {
		return documents
			.filter(document => document.title === documentTitle)
			.map(item => item.title);
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
						<Route
							path='/settings'
							render={props => (
								<Settings documentList={this.state.documents} {...props} />
							)}
						/>
						<Route
							path='/details/:title'
							render={props => (
								<DocumentDetailView
									document={this.state.documents}
									chooseDocument={this.showDetailPage(
										this.state.documents,
										props.match.params.title
									)}
									{...props}
								/>
							)}
						/>

						<Route exact path='/home' component={Home} />
						<Route exact path='/create' component={CreateDocument} />
						<Route exact path='/settings' component={Settings} />
						<Route exact path='/details' component={DocumentDetailView} />
						<Route
							exact
							path='/not-found'
							component={() => <h1>Not Found</h1>}
						/>
					</Switch>
				</section>
				<Footer />
			</main>
		);
	}
}
