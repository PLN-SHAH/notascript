import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import WorkPage from '../Work/WorkPage.js';
import DocumentsPage from '../Documents/DocumentsPage.js';
import DomainsPage from '../domains/DomainsPage.js';
import DictionaryList from '../dictionary/DictionaryList.js';
import AddDictionary from '../dictionary/AddDictionary.js';
import Edit from '../edit/Edit.js';
import CreateDocument from '../create/CreateDocument';
import OverviewPage from '../Overview/OverviewPage.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import DocumentDetailView from '../Documents/DocumentDetailView.js';
import styled from 'styled-components';
import uid from 'uid';

const StyledContent = styled.section`
	overflow-y: scroll;
	word-break: break-all;
	width: 100vw;
`;

export default class App extends Component {
	state = {
		dictionaries: [
			{
				title: 'shorthands',
				id: uid(),
				entries: [
					{ key: '1', value: 'first' },
					{ key: '2', value: 'second' },
					{ key: '3', value: 'third' }
				]
			},
			{
				title: 'stuff',
				id: uid(),
				entries: [
					{ key: 'I', value: 'Iran' },
					{ key: 'Tr', value: 'Türkei' },
					{ key: 'Bo', value: 'Bolivien' }
				]
			}
		],

		domains: ['random', 'important', 'do'],
		documents: [
			{
				title: 'Eins',
				description:
					'Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel',
				id: uid(),
				domains: ['Gericht', 'Straftrecht'],
				symbols: ['A', 'Ȇ', 'ȇ', 'Ȉ', 'Ȑ', 'A']
			},
			{
				title: 'Zwei',
				description:
					'But I must explain to you how all this mistaken idea of denouncing',
				id: uid(),
				domains: ['Zeitung', 'Medien'],
				symbols: ['C', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			},
			{
				title: 'Drei',
				description: 'lalalalala',
				id: uid(),
				domains: ['Zeitung', 'Medien'],
				symbols: ['C', 'Ȃ', 'ȃ', 'Ȅ', 'ȅ', 'Ȇ', 'ȇ', 'Ȉ', 'ȉ', 'Ȑ']
			}
		]
	};

	getIndex(document) {
		return this.state.documents.findIndex(
			arrayItem => arrayItem.id === document.id
		);
	}

	getIndexDict(dictionary) {
		return this.state.dictionaries.findIndex(
			arrayItem => arrayItem.id === dictionary.id
		);
	}

	addDocument({ title, description, domains, symbols }) {
		const newDocument = {
			title,
			description,
			id: uid(),
			domains,
			symbols: symbols || ['*']
		};

		this.setState({
			...this.state,
			documents: [newDocument, ...this.state.documents]
		});
	}

	addDictionary({ title }) {
		const newDictionary = {
			title,
			entries: [],
			id: uid()
		};

		this.setState({
			...this.state,
			dictionaries: [newDictionary, ...this.state.dictionaries]
		});
	}

	updateDocument(document) {
		const index = this.getIndex(document);
		const { title, description, domains, symbols, id } = document;

		const updatedDocument = {
			title,
			description,
			domains,
			symbols,
			id
		};

		this.setState({
			...this.state,
			documents: [
				...this.state.documents.slice(0, index),
				updatedDocument,
				...this.state.documents.slice(index + 1)
			]
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

	deleteDictionary(dictionary) {
		const index = this.getIndexDict(dictionary);

		this.setState({
			dictionaries: [
				...this.state.dictionaries.slice(0, index),
				...this.state.dictionaries.slice(index + 1)
			]
		});
	}

	showDetails({ props }, dataArray) {
		const selectionArray = dataArray.filter(
			document => document.id === props.match.params.id
		);
		return selectionArray[0];
	}

	addDomain(domainName) {
		this.setState({
			domains: [domainName, ...this.state.domains]
		});
	}

	addEntryToDict(entry) {
		const newEntry = { key: entry.synonym, value: entry.meaning };
		const selectedDict = this.state.dictionaries.find(
			item => item.title === entry.title
		);

		selectedDict.entries = [...selectedDict.entries, newEntry];
	}

	render() {
		return (
			<main>
				<Header />
				<StyledContent>
					<Switch>
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
							path='/domains'
							render={() => (
								<DomainsPage
									domainList={this.state.domains}
									onFormSubmit={data => this.addDomain(data)}
								/>
							)}
						/>
						<Route
							path='/dictionaries'
							render={() => (
								<DictionaryList
									dictionaries={this.state.dictionaries}
									onDelete={document => this.deleteDictionary(document)}
									onFormSubmit={dictionary => this.addDictionary(dictionary)}
								/>
							)}
						/>
						<Route
							path='/documents'
							render={props => (
								<DocumentsPage
									documentList={this.state.documents}
									onDelete={document => this.deleteDocument(document)}
									{...props}
								/>
							)}
						/>

						<Route
							path='/details/:id'
							render={props => (
								<DocumentDetailView
									selectedDocument={this.showDetails(
										{ props },
										this.state.documents
									)}
								/>
							)}
						/>
						<Route
							path='/edit/:id'
							render={props => (
								<Edit
									selectedDocument={this.showDetails(
										{ props },
										this.state.documents
									)}
									onFormSubmit={document => this.updateDocument(document)}
									domainList={this.state.domains}
									{...props}
								/>
							)}
						/>

						<Route
							path='/editDictionary/:id'
							render={props => (
								<AddDictionary
									dictionary={this.showDetails(
										{ props },
										this.state.dictionaries
									)}
									onFormSubmitEntries={entry => this.addEntryToDict(entry)}
								/>
							)}
						/>

						<Route
							path='/work/:id'
							render={props => (
								<WorkPage
									selectedDocument={this.showDetails(
										{ props },
										this.state.documents
									)}
									dictionaries={this.state.dictionaries}
									onFormSubmitEntries={entry => this.addEntryToDict(entry)}
									{...props}
								/>
							)}
						/>

						<Route
							path='/overview'
							render={props => (
								<OverviewPage
									documentList={this.state.documents}
									onDelete={document => this.deleteDocument(document)}
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
