import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import WorkPage from '../Work/WorkPage.js';
import DocumentsPage from '../Documents/DocumentsPage.js';
import DomainsPage from '../domains/DomainsPage.js';
import EditDocument from '../edit/EditDocument.js';
import CreateDocument from '../create/CreateDocument';
import OverviewPage from '../Overview/OverviewPage.js';
import { Route, Switch } from 'react-router-dom';
import DocumentDetailView from '../Documents/DocumentDetailView.js';
import styled from 'styled-components';

const StyledContent = styled.section`
	overflow-y: scroll;
`;

export default class App extends Component {
	state = {
		domains: ['random', 'important', 'd'],
		symbols: [],
		documents: [
			{
				title: 'Lorem',
				description:
					'Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel',

				domains: ['Gericht', 'Straftrecht'],
				symbols: ['A', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			},
			{
				title: 'Ipsum',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
				domains: ['Schule', 'Allgemein', 'Freizeit'],
				symbols: ['B', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			},
			{
				title: 'Dolor',
				description:
					'But I must explain to you how all this mistaken idea of denouncing',
				domains: ['Zeitung', 'Medien'],
				symbols: ['C', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			}
		]
	};

	getIndexByTitle(document) {
		return this.state.documents.findIndex(
			index => index.title === document.title
		);
	}

	addDocument(data, history) {
		const newDocument = {
			title: data.title,
			description: data.description,
			symbols: data.symbols || '*',
			domains: data.domains || 'addtext'
		};

		this.setState({
			documents: [newDocument, ...this.state.documents]
		});

		history && history.replace('/documents');
	}

	addDomain(domainName) {
		this.setState({
			domains: [domainName, ...this.state.domains]
		});
	}

	updateSymbols(symbolFromButton, symbolList) {
		this.setState({
			symbols: symbolList
		});
		console.log('app set state symbols', this.state.symbols);
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
							path='/work/:title'
							render={props => (
								<WorkPage
									handleButtonClick={(symbolFromButton, symbolList) =>
										this.updateSymbols(symbolFromButton, symbolList)
									}
									selectedDocument={this.showDetails({ props })}
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
								<OverviewPage
									documentList={this.state.documents}
									{...props}
									onDelete={document => this.deleteDocument(document)}
								/>
							)}
						/>
						<Route
							path='/documents'
							render={props => (
								<DocumentsPage
									documentList={this.state.documents}
									{...props}
									onDelete={document => this.deleteDocument(document)}
								/>
							)}
						/>
						<Route
							path='/domains'
							render={() => (
								<DomainsPage
									domainList={this.state.domains}
									onFormSubmit={data => this.addDomain(data)}
								/>
							)}
						/>
						<Route
							path='/details/:title'
							render={props => (
								<DocumentDetailView
									selectedDocument={this.showDetails({ props })}
									documents={this.state.documents}
								/>
							)}
						/>
						<Route
							path='/edit/:title'
							render={props => (
								<EditDocument
									selectedDocument={this.showDetails({ props })}
									onFormSubmit={data => this.addDocument(data)}
									domainList={this.state.domains}
								/>
							)}
						/>
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
