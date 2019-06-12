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
import React, { useEffect, useState } from 'react';
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

export default function App() {
	const [documents, setDocuments] = useState([]);
	const [dictionaries, setDictionaries] = useState([]);
	const [domains, setDomains] = useState([]);

	useEffect(() => {
		loadDocuments();
		loadDictionaries();
	}, []);

	const createDocument = (data, history) => {
		postDocument(data)
			.then(newDocument => {
				setDocuments([...documents, newDocument]);
				history.push('/');
			})
			.catch(error => console.log(error));
	};

	const createDictionary = (title, history) => {
		postDictionary(title)
			.then(newDictionary => {
				setDictionaries([...dictionaries, newDictionary]);
				history.push('/');
			})
			.catch(error => console.log(error));
	};

	const readDocument = props => {
		const selectionArray = documents.filter(
			document => document._id === props.match.params.id
		);
		return selectionArray[0];
	};

	const readDictionary = props => {
		const selectionArray = dictionaries.filter(
			dictionary => dictionary._id === props.match.params.id
		);
		return selectionArray[0];
	};

	function loadDocuments() {
		getDocuments()
			.then(data => {
				setDocuments(data);
			})
			.catch(error => console.log(error));
	}

	function loadDictionaries() {
		getDictionaries()
			.then(data => {
				setDictionaries(data);
			})
			.catch(error => console.log(error));
	}

	const updateDocument = document => {
		patchDocument(document, document._id);

		const index = getIndex(documents, document);
		const { title, description, domains, symbols, _id } = document;

		const updatedDocument = {
			title,
			description,
			domains,
			symbols,
			_id
		};

		setDocuments([
			...documents.slice(0, index),
			updatedDocument,
			...documents.slice(index + 1)
		]);
	};

	const removeDocument = document => {
		const index = getIndex(documents, document);

		deleteDocument(document, document._id);

		setDocuments([...documents.slice(0, index), ...documents.slice(index + 1)]);
	};
	//delete entry
	const removeDictionary = dictionary => {
		const index = getIndex(dictionaries, dictionary);

		deleteDictionary(dictionary, dictionary._id);

		setDictionaries([
			...dictionaries.slice(0, index),
			...dictionaries.slice(index + 1)
		]);
	};

	const addDomain = domainName => {
		setDomains([domainName, ...domains]);
	};

	//deleteDomain
	//deleteEntry

	const addEntryToDict = entry => {
		const { synonym, title, meaning } = entry;
		const newEntry = { key: synonym, value: meaning };
		const selectedDict = dictionaries.find(item => item.title === title);

		selectedDict.entries = [...selectedDict.entries, newEntry];
	};

	return (
		<main>
			<Header />
			<StyledContent>
				<Switch>
					<Route
						path='/create'
						render={props => (
							<DocumentCreate
								onFormSubmit={data => createDocument(data)}
								domainList={domains}
								{...props}
							/>
						)}
					/>
					<Route
						path='/domains'
						render={() => (
							<DomainsPage
								domainList={domains}
								onFormSubmit={data => addDomain(data)}
							/>
						)}
					/>
					<Route
						path='/dictionaries'
						render={() => (
							<DictionaryList
								dictionaryList={dictionaries}
								onDelete={document => removeDictionary(document)}
								onFormSubmit={dictionary => createDictionary(dictionary)}
							/>
						)}
					/>
					<Route
						path='/documents'
						render={props => (
							<DocumentsPage
								documentList={documents}
								onDelete={document => {
									removeDocument(document);
								}}
								{...props}
							/>
						)}
					/>

					<Route
						path='/details/:id'
						render={props => (
							<DocumentDetail selectedDocument={readDocument(props)} />
						)}
					/>
					<Route
						path='/edit/:id'
						render={props => (
							<Edit
								selectedDocument={readDocument(props)}
								onFormSubmit={document => updateDocument(document)}
								domainList={domains}
								{...props}
							/>
						)}
					/>

					<Route
						path='/editDictionary/:id'
						render={props => (
							<DictionaryAdd
								dictionary={readDictionary(props)}
								/*onDeleteEntry={entry => deleteEntry(entry)}*/
								onFormSubmitEntries={entry => addEntryToDict(entry)}
							/>
						)}
					/>

					<Route
						path='/work/:id'
						render={props => (
							<WorkPage
								selectedDocument={readDocument(props)}
								dictionaryList={dictionaries}
								onFormSubmitEntries={entry => addEntryToDict(entry)}
								{...props}
							/>
						)}
					/>

					<Route
						path='/overview'
						render={props => (
							<OverviewPage
								documentList={documents}
								onDelete={document => deleteDocument(document)}
								{...props}
							/>
						)}
					/>
					<Redirect from='/' to='/documents' />
					<Route exact path='/not-found' component={() => <h1>Not Found</h1>} />
				</Switch>
			</StyledContent>
			<Footer />
		</main>
	);
}
