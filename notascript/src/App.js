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

const StyledContent = styled.section`
	overflow-y: scroll;
`;

export default class App extends Component {
	state = {
		symbols: [],
		actualSymbol: '',
		documents: [
			{
				title: 'Lorem',
				description:
					'Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel',

				domains: ['Gericht', 'Straftrecht'],
				symbols: ['ȁ', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			},
			{
				title: 'Ipsum',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
				domains: ['Schule', 'Allgemein', 'Freizeit'],
				symbols: ['ȁ', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ'],
				domains: ['tag1', 'tag2', 'tag3']
			},
			{
				title: 'Dolor',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
				domains: ['Zeitung'],
				symbols: ['ȁ', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			}
		]
	};

	createNewDocument(data) {
		const newDocument = {
			title: data.title,
			description: data.description,
			symbols: ['*'],
			domains: [' tag']
		};

		this.setState({
			documents: [newDocument, ...this.state.documents]
		});
	}

	getSymbolsFromButtons(buttonLabel) {
		const symbol = buttonLabel;

		this.setState({
			actualSymbol: symbol,
			symbols: [...this.state.symbols, symbol]
		});
	}

	deleteDocumentFromList(document) {
		const index = this.state.documents.indexOf(document);
		this.setState({
			documents: [
				...this.state.documents.slice(0, index),

				...this.state.documents.slice(index + 1)
			]
		});
	}

	selectDocumentForDetailView({ props }) {
		console.log(props.match.params, ' document for details view props');

		const selection = this.state.documents.filter(
			document => document.title === props.match.params.title
		);
		console.log(selection, 'selection');
		return selection;
	}

	render() {
		return (
			<main>
				<Header />
				<StyledContent>
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
							render={() => (
								<CreateDocument
									onFormSubmit={data => this.createNewDocument(data)}
								/>
							)}
						/>
						<Route
							path='/settings'
							render={props => (
								<Settings
									documentList={this.state.documents}
									{...props}
									onDelete={document => this.deleteDocumentFromList(document)}
								/>
							)}
						/>
						<Route
							path='/details/:title'
							render={props => (
								<DocumentDetailView
									selectedDocument={this.selectDocumentForDetailView({ props })}
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
				</StyledContent>
				<Footer />
			</main>
		);
	}
}
