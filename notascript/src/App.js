import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Work from './Work.js';
import Home from './Home.js';
import CreateDocument from './CreateDocument';
import Settings from './Settings.js';
import { Route, Switch } from 'react-router-dom';
import DocumentDetailView from './DocumentDetailView.js';
import styled from 'styled-components';

const StyledContentContainer = styled.section`
	flex: 1;
`;

export default class App extends Component {
	state = {
		symbols: [],
		actualSymbol: '',
		documents: [
			{
				title: 'filename1',
				description:
					'Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel',

				domains: ['domainx', 'domainy', 'domainz'],
				symbols: ['ȁ', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			},
			{
				title: 'filename2',
				description: 'some description for filename2',
				domains: ['domain1', 'domain2', 'domain3'],
				symbols: ['ȁ', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			},
			{
				title: 'filename3',
				description: 'some description for filename3',
				domains: ['domain_a', 'domain_b', 'domain_c'],
				symbols: ['ȁ', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
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

	selectDocumentForDetailView(props) {
		return this.state.documents.filter(
			document => document.title === props.match.params.title
		);
	}

	render() {
		return (
			<main>
				<Header />
				<StyledContentContainer>
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
									selectedDocument={this.selectDocumentForDetailView(props)}
									documents={this.state.documents}
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
				</StyledContentContainer>
				<Footer />
			</main>
		);
	}
}
