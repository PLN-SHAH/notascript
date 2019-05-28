import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Work from './Work.js';
import EditDocument from './EditDocument.js';
import CreateDocument from './CreateDocument';
import Overview from './Overview.js';
import { Route, Switch } from 'react-router-dom';
import DocumentDetailView from './DocumentDetailView.js';
import styled from 'styled-components';

const StyledContent = styled.section`
	overflow-y: scroll;
`;

export default class App extends Component {
	state = {
		domains: ['random', 'important', 'd'],
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
				symbols: ['ȁ', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			},
			{
				title: 'Dolor',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
				domains: ['Zeitung', 'Medien'],
				symbols: ['ȁ', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			}
		]
	};

	getIndexByTitle(document) {
		return this.state.documents.findIndex(
			index => index.title === document.title
		);
	}

	addDocument(data, history) {
		console.log(data);
		const newDocument = {
			title: data.title,
			description: data.description,
			symbols: data.symbols || ['*'],
			domains: data.domains || [' tag']
		};

		this.setState({
			documents: [newDocument, ...this.state.documents]
		});

		if (history) {
			history.replace('/overview');
		}
	}

	getSymbolsFromButtons(buttonLabel) {
		const symbol = buttonLabel;

		this.setState({
			actualSymbol: symbol,
			symbols: [...this.state.symbols, symbol]
		});
	}

	deleteDocument(document) {
		const index = this.getIndexByTitle(document);

		this.setState({
			documents: [
				...this.state.documents.slice(0, index),
				...this.state.documents.slice(index + 1)
			]
		});
	}

	showDetails({ props }) {
		const selectionArray = this.state.documents.filter(
			document => document.title === props.match.params.title
		);
		return selectionArray[0];
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
							render={({ history }) => (
								<CreateDocument
									onFormSubmit={data => this.addDocument(data, history)}
									domainList={this.state.domains}
								/>
							)}
						/>
						<Route
							path='/overview'
							render={props => (
								<Overview
									documentList={this.state.documents}
									{...props}
									onDelete={document => this.deleteDocument(document)}
								/>
							)}
						/>
						<Route
							path='/details/:title'
							render={props => (
								<DocumentDetailView
									selectedDocument={this.showDetails({ props })}
									documents={this.state.documents}
									{...props}
								/>
							)}
						/>
						<Route
							path='/edit/:title'
							render={props => (
								<EditDocument
									{...props}
									selectedDocument={this.showDetails({ props })}
									onFormSubmit={data => this.addDocument(data)}
								/>
							)}
						/>
						<Route exact path='/edit' component={EditDocument} />
						<Route exact path='/create' component={CreateDocument} />
						<Route exact path='/overview' component={Overview} />
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
