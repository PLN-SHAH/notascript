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
		loadData();
	}, []);

	function loadData() {
		getDocuments()
			.then(data => {
				setDocuments(data);
			})
			.catch(error => console.log(error));

		getDictionaries()
			.then(data => {
				setDictionaries(data);
			})
			.catch(error => console.log(error));
	}

	const createDocument = (data, history) => {
		postDocument(data)
			.then(newDocument => {
				setDocuments([newDocument, ...documents]);
				history.push('/');
			})
			.catch(error => console.log(error));
	};

	const createDictionary = (data, history) => {
		postDictionary(data)
			.then(newDictionary => {
				setDictionaries([...dictionaries, newDictionary]);
				history.push('/');
			})
			.catch(error => console.log(error));
	};

	const readData = (props, dataList) => {
		return dataList.filter(data => data._id === props.match.params.id)[0];
	};

	const updateDocument = document => {
		const { title, description, symbols, _id } = document;
		const index = getIndex(documents, document);

		patchDocument(document, document._id);

		const updatedDocument = {
			title,
			description,
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

	const removeDictionary = dictionary => {
		const index = getIndex(dictionaries, dictionary);

		deleteDictionary(dictionary, dictionary._id);

		setDictionaries([
			...dictionaries.slice(0, index),
			...dictionaries.slice(index + 1)
		]);
	};

	const createDomain = domainName => {
		setDomains([domainName, ...domains]);
	};

	const createDictionaryEntry = ({ title, synonym, meaning }) => {
		const newEntry = { key: synonym, value: meaning };
		const dictionary = dictionaries.find(item => item.title === title);

		dictionary.entries = [...dictionary.entries, newEntry];
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
								domains={domains}
								{...props}
							/>
						)}
					/>
					<Route
						path='/domains'
						render={() => (
							<DomainsPage
								onFormSubmit={data => createDomain(data)}
								domains={domains}
							/>
						)}
					/>
					<Route
						path='/dictionaries'
						render={() => (
							<DictionaryList
								onFormSubmit={data => createDictionary(data)}
								onDelete={document => removeDictionary(document)}
								dictionaries={dictionaries}
							/>
						)}
					/>
					<Route
						path='/documents'
						render={props => (
							<DocumentsPage
								onDelete={document => {
									removeDocument(document);
								}}
								documents={documents}
								{...props}
							/>
						)}
					/>

					<Route
						path='/details/:id'
						render={props => (
							<DocumentDetail selectedDocument={readData(props, documents)} />
						)}
					/>
					<Route
						path='/edit/:id'
						render={props => (
							<Edit
								onFormSubmit={document => updateDocument(document)}
								domains={domains}
								selectedDocument={readData(props, documents)}
								{...props}
							/>
						)}
					/>

					<Route
						path='/editDictionary/:id'
						render={props => (
							<DictionaryAdd
								onFormSubmitEntries={entry => createDictionaryEntry(entry)}
								dictionary={readData(props, dictionaries)}
							/>
						)}
					/>

					<Route
						path='/work/:id'
						render={props => (
							<WorkPage
								onFormSubmitEntries={entry => createDictionaryEntry(entry)}
								dictionaries={dictionaries}
								selectedDocument={readData(props, documents)}
								updateDocumentSymbols={selectedDocument =>
									updateDocument(selectedDocument)
								}
								{...props}
							/>
						)}
					/>

					<Route path='/overview' render={props => <OverviewPage />} />
					<Redirect from='/' to='/documents' />
					<Route exact path='/not-found' component={() => <h1>Not Found</h1>} />
				</Switch>
			</StyledContent>
			<Footer />
		</main>
	);
}
