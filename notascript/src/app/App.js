import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import WorkPage from '../Work/WorkPage.js';
import DocumentsPage from '../Documents/DocumentsPage.js';
import DomainsPage from '../domains/DomainsPage.js';
import Edit from '../edit/Edit.js';
import CreateDocument from '../create/CreateDocument';
import OverviewPage from '../Overview/OverviewPage.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import DocumentDetailView from '../Documents/DocumentDetailView.js';
import styled from 'styled-components';
import uid from 'uid';

const StyledContent = styled.section`
	overflow-y: scroll;
`;

export default class App extends Component {
	state = {
		domains: ['random', 'important', 'do'],
		documents: [
			{
				title: 'Einseeeeeeeeeeeeehrlaaaaaangertitle',
				description:
					'Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel',
				id: uid(),
				domains: ['Gericht', 'Straftrecht'],
				symbols: [
					'A',
					'Ȃ',
					'ȃ',
					'Ȅ',
					'ȅ',
					'Ȇ',
					'ȇ',
					'Ȉ',
					'ȉ',
					'Ȑ',
					'A',
					'Ȃ',
					'ȃ',
					'Ȅ',
					'ȅ',
					'Ȇ',
					'ȇ',
					'Ȉ',
					'ȉ',
					'Ȑ',
					'A',
					'Ȃ',
					'ȃ',
					'Ȅ',
					'ȅ',
					'Ȇ',
					'ȇ',
					'Ȉ',
					'ȉ',
					'Ȑ',
					'A',
					'Ȃ',
					'ȃ',
					'Ȅ',
					'ȅ',
					'Ȇ',
					'ȇ',
					'Ȉ',
					'ȉ',
					'Ȑ'
				]
			},
			{
				title: 'Dolor',
				description:
					'But I must explain to you how all this mistaken idea of denouncing',
				id: uid(),
				domains: ['Zeitung', 'Medien'],
				symbols: ['C', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			}
		]
	};

	getIndex(document) {
		console.log(document, 'getindex');
		return this.state.documents.findIndex(index => index.id === document.id);
	}

	addDocument(data) {
		console.log(data, 'adddoc');
		const newDocument = {
			title: data.title,
			description: data.description,
			id: uid(),
			domains: data.domains || 'addtext'
		};

		this.setState({
			documents: [newDocument, ...this.state.documents]
		});
	}

	updateDocument(data) {
		console.log('update', data);
		console.log('app', this.state.documents);
		//no id
	}

	addDomain(domainName) {
		this.setState({
			domains: [domainName, ...this.state.domains]
		});
	}

	deleteDocument(document) {
		const index = this.getIndex(document);

		this.setState({
			documents: [
				...this.state.documents.slice(0, index),
				...this.state.documents.slice(index + 1)
			]
		});
	}

	showDetails({ props }) {
		console.log('show detail', props);
		const selectionArray = this.state.documents.filter(
			document => document.id === props.match.params.id
		);
		console.log(selectionArray, 'showdetails');
		return selectionArray[0];
	}

	render() {
		return (
			<main>
				<Header />
				<StyledContent>
					<Switch>
						<Route
							path='/work/:id'
							render={props => (
								<WorkPage
									selectedDocument={this.showDetails({ props })}
									{...props}
								/>
							)}
						/>

						<Route
							path='/create'
							render={props => (
								<CreateDocument
									onFormSubmit={data => this.addDocument(data)}
									domainList={this.state.domains}
									{...props}
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
							path='/details/:id'
							render={props => (
								<DocumentDetailView
									selectedDocument={this.showDetails({ props })}
								/>
							)}
						/>
						<Route
							path='/edit/:id'
							render={props => (
								<Edit
									selectedDocument={this.showDetails({ props })}
									onFormSubmit={data => this.updateDocument(data)}
									domainList={this.state.domains}
									{...props}
								/>
							)}
						/>
						<Redirect from='/' to='/documents' />
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
