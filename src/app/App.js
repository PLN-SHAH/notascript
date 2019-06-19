import DictionaryAdd from '../components/dictionary/DictionaryAdd.js'
import DocumentCreate from '../components/create/Document'
import DictionaryList from '../components/dictionary/DictionaryList.js'
import Details from '../components/document/Details.js'
import Documents from '../components/document/Documents.js'
import Edit from '../components/edit/Edit.js'
import Footer from './Footer.js'
import Header from './Header.js'
import OverviewPage from '../components/overview/OverviewPage.js'
import React, { useEffect, useState } from 'react'
import Work from '../components/work/Work.js'
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import { getIndex } from '../services/Services.js'
import {
  deleteDocument,
  getDocuments,
  patchDocument,
  postDocument,
} from '../services/ServiceDocument.js'

import {
  deleteDictionary,
  getDictionaries,
  postDictionary,
<<<<<<< HEAD
=======
  patchDictionary,
>>>>>>> f832881dd3b3ea12885ef92277b27f9dbd3a980e
} from '../services/ServiceDictionary.js'

const StyledContent = styled.section`
  overflow-y: scroll;
  word-break: break-all;
  width: 100vw;
`

export default function App() {
  const [documents, setDocuments] = useState([])
  const [dictionaries, setDictionaries] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  function loadData() {
    getDocuments()
      .then(data => {
        setDocuments(data)
      })
      .catch(error => console.log(error))

    getDictionaries()
      .then(data => {
        setDictionaries(data)
      })
      .catch(error => console.log(error))
  }

  const createDocument = (data, history) => {
    postDocument(data)
      .then(newDocument => {
        setDocuments([newDocument, ...documents])
        history.push('/')
      })
      .catch(error => console.log(error))
  }

  const createDictionary = (data, history) => {
    postDictionary(data)
      .then(newDictionary => {
        setDictionaries([...dictionaries, newDictionary])
        history.push('/')
      })
      .catch(error => console.log(error))
  }

  const readData = (props, dataList) => {
    return dataList.filter(data => data._id === props.match.params.id)[0]
  }

  const updateDocument = document => {
    const { title, description, symbols, _id } = document
    const index = getIndex(documents, document)

    patchDocument(document, document._id)

    const updatedDocument = {
      title,
      description,
      symbols,
      _id,
    }

    setDocuments([
      ...documents.slice(0, index),
      updatedDocument,
      ...documents.slice(index + 1),
    ])
  }

  const removeDocument = document => {
    const index = getIndex(documents, document)

    deleteDocument(document, document._id)

    setDocuments([...documents.slice(0, index), ...documents.slice(index + 1)])
  }

  const removeDictionary = dictionary => {
    const index = getIndex(dictionaries, dictionary)

    deleteDictionary(dictionary, dictionary._id)

    setDictionaries([
      ...dictionaries.slice(0, index),
      ...dictionaries.slice(index + 1),
    ])
  }

  const createDictionaryEntry = dictionary => {
    const index = getIndex(dictionaries, dictionary)
    const { _id, entries, title } = dictionary

    const updatedDictionary = {
      title,
      entries,
      _id,
    }

    patchDictionary(dictionary)

    setDictionaries([
      ...dictionaries.slice(0, index),
      updatedDictionary,
      ...dictionaries.slice(index + 1),
    ])
  }

  return (
    <main>
      <Header />
      <StyledContent>
        <Switch>
          <Route
            path="/create"
            render={props => (
              <DocumentCreate
                onFormSubmit={data => createDocument(data)}
                {...props}
              />
            )}
          />
          <Route
            path="/dictionaries"
            render={() => (
              <DictionaryList
                onFormSubmit={data => createDictionary(data)}
                onDelete={document => removeDictionary(document)}
                dictionaries={dictionaries}
              />
            )}
          />
          <Route
            path="/documents"
            render={props => (
              <Documents
                onDelete={document => {
                  removeDocument(document)
                }}
                documents={documents}
                {...props}
              />
            )}
          />

          <Route
            path="/details/:id"
            render={props => (
              <Details selectedDocument={readData(props, documents)} />
            )}
          />
          <Route
            path="/edit/:id"
            render={props => (
              <Edit
                onFormSubmit={document => updateDocument(document)}
                selectedDocument={readData(props, documents)}
                {...props}
              />
            )}
          />

          <Route
            path="/dictionaries/:id"
            render={props => (
              <DictionaryAdd
                onFormSubmitEntries={dictionary =>
                  createDictionaryEntry(dictionary)
                }
                dictionary={readData(props, dictionaries)}
              />
            )}
          />

          <Route
            path="/work/:id"
            render={props => (
              <Work
                onFormSubmitEntries={dictionary =>
                  createDictionaryEntry(dictionary)
                }
                dictionaries={dictionaries}
                selectedDocument={readData(props, documents)}
                updateDocumentSymbols={selectedDocument =>
                  updateDocument(selectedDocument)
                }
                {...props}
              />
            )}
          />

          <Route path="/overview" render={props => <OverviewPage />} />
          <Redirect from="/" to="/documents" />
          <Route exact path="/not-found" component={() => <h1>Not Found</h1>} />
        </Switch>
      </StyledContent>
      <Footer />
    </main>
  )
}
