import DictionaryAdd from '../components/dictionary/DictionaryAdd.js';
import DocumentCreate from '../components/create/Document';
import DictionaryList from '../components/dictionary/DictionaryList.js';
import DocumentDetail from '../components/document/DocumentDetails.js';
import DocumentsPage from '../components/document/DocumentsPage.js';
import DomainsPage from '../components/domain/DomainsPage.js';
import Edit from '../components/edit/Edit.js';
import Footer from './Footer.js';
import Header from './Header.js';
import OverviewPage from '../components/overview/OverviewPage.js';
import React, { Component } from 'react';
import WorkPage from '../components/work/WorkPage.js';
import styled from 'styled-components';
import uid from 'uid';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
	postDocument,
	getDocuments,
	deleteDocument,
	patchDocument,
	getIndex
} from '../Services';

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
			},
			{
				title: 'all',
				id: uid(),
				entries: []
			}
		],

		domains: ['random', 'important', 'do'],
		documents: []
	};

	createDocument = (data, history) => {
		postDocument(data)
			.then(newDocument => {
				this.setState({
					...this.state,
					documents: [newDocument, ...this.state.documents]
				});
				history.push('/');
			})
			.catch(error => console.log(error));
	};

	readDocument({ props }) {
		const selectionArray = this.state.documents.filter(
			document => document._id === props.match.params.id
		);
		return selectionArray[0];
	}

	readDocuments() {
		getDocuments()
			.then(data => {
				this.setState({
					...this.state,
					documents: data
				});
			})
			.catch(error => console.log(error));
	}

	updateDocument(document) {
		patchDocument(document, document._id);

		const index = getIndex(this.state.documents, document);
		const { title, description, domains, symbols, _id } = document;

		const updatedDocument = {
			title,
			description,
			domains,
			symbols,
			_id
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

	removeDocument(document) {
		const index = getIndex(this.state.documents, document);

		deleteDocument(document, document._id);

		this.setState({
			documents: [
				...this.state.documents.slice(0, index),
				...this.state.documents.slice(index + 1)
			]
		});
	}
	deleteDictionary(dictionary) {
		const index = getIndex(this.state.dictionaries, dictionary);

		this.setState({
			dictionaries: [
				...this.state.dictionaries.slice(0, index),
				...this.state.dictionaries.slice(index + 1)
			]
		});
	}

	componentDidMount() {
		this.readDocuments();
	}

	DictionaryAdd({ title }) {
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

	showDetails({ props }, dataArray) {
		console.log('in showDetails ', this.state.documents);
		const selectionArray = dataArray.filter(
			document => document.id === props.match.params.id
		);

		console.log('in showDetails ', selectionArray);
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

	deleteEntry(entry) {
		console.log(entry, 'in delete entry');
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
								<DocumentCreate
									onFormSubmit={data => this.createDocument(data)}
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
									dictionaryList={this.state.dictionaries}
									onDelete={document => this.deleteDictionary(document)}
									onFormSubmit={dictionary => this.DictionaryAdd(dictionary)}
								/>
							)}
						/>
						<Route
							path='/documents'
							render={props => (
								<DocumentsPage
									documentList={this.state.documents}
									onDelete={document => {
										this.removeDocument(document);
									}}
									{...props}
								/>
							)}
						/>

						<Route
							path='/details/:id'
							render={props => (
								<DocumentDetail
									selectedDocument={this.readDocument({ props })}
								/>
							)}
						/>
						<Route
							path='/edit/:id'
							render={props => (
								<Edit
									selectedDocument={this.readDocument({ props })}
									onFormSubmit={document => this.updateDocument(document)}
									domainList={this.state.domains}
									{...props}
								/>
							)}
						/>

						<Route
							path='/editDictionary/:id'
							render={props => (
								<DictionaryAdd
									dictionary={this.showDetails(
										{ props },
										this.state.dictionaries
									)}
									onDeleteEntry={entry => this.deleteEntry(entry)}
									onFormSubmitEntries={entry => this.addEntryToDict(entry)}
								/>
							)}
						/>

						<Route
							path='/work/:id'
							render={props => (
								<WorkPage
									selectedDocument={this.readDocument({ props })}
									dictionaryList={this.state.dictionaries}
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
