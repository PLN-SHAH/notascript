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
import { Route, Switch, Redirect } from 'react-router-dom';
import { getIndex } from '../services/Services.js';
import {
	deleteDocument,
	getDocuments,
	patchDocument,
	postDocument
} from '../services/ServiceDocument.js';

import {
	deleteDictionary,
	getDictionaries,
	postDictionary
} from '../services/ServiceDictionary.js';

const StyledContent = styled.section`
	overflow-y: scroll;
	word-break: break-all;
	width: 100vw;
`;

export default class App extends Component {
	state = {
		dictionaries: [],
		domains: ['random', 'important', 'do'],
		documents: []
	};

	/*
	const [documents, setDocuments] = useState([]);
	const [dictionaries, setDictionaries] = useState([]);*/

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

	createDictionary = (title, history) => {
		postDictionary(title)
			.then(newDictionary => {
				this.setState({
					...this.state,
					dictionaries: [newDictionary, ...this.state.dictionaries]
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

	readDictionary({ props }) {
		const selectionArray = this.state.dictionaries.filter(
			dictionary => dictionary._id === props.match.params.id
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

	readDictionaries() {
		getDictionaries()
			.then(data => {
				this.setState({
					...this.state,
					dictionaries: data
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
	//delete entry
	removeDictionary(dictionary) {
		const index = getIndex(this.state.dictionaries, dictionary);

		deleteDictionary(dictionary, dictionary._id);

		this.setState({
			dictionaries: [
				...this.state.dictionaries.slice(0, index),
				...this.state.dictionaries.slice(index + 1)
			]
		});
	}

	componentDidMount() {
		this.readDocuments();
		this.readDictionaries();
	}

	addDomain(domainName) {
		this.setState({
			domains: [domainName, ...this.state.domains]
		});
	}

	//deleteDomain
	//deleteEntry

	addEntryToDict(entry) {
		const { synonym, title, meaning } = entry;
		const newEntry = { key: synonym, value: meaning };
		const selectedDict = this.state.dictionaries.find(
			item => item.title === title
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
									onDelete={document => this.removeDictionary(document)}
									onFormSubmit={dictionary => this.createDictionary(dictionary)}
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
									dictionary={this.readDictionary({ props })}
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
