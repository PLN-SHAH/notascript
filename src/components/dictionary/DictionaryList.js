import Dictionary from './Dictionary.js'
import PropType from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { NavIcon } from '../../misc/Style.js'

const StyledForm = styled.form`
  grid-template-rows: auto;
  height: unset;
  border-top: 5px solid #29c1ee;
`

const StyledLabel = styled.label`
  font-weight: bold;
  color: #29c1ee;
`

const StyledButton = styled.button`
  background-color: #29c1ee;
`

const StyledNavIcon = styled(NavIcon)``

export default function DictionaryList({
  onFormSubmit,
  onDelete,
  onDeleteEntry,
  dictionaries,
}) {
  function handleSubmit(event) {
    const title = event.target.title

    event.preventDefault()

    onFormSubmit({
      title: title.value,
      entries: [],
    })

    title.value = ''
    title.focus()
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">new dictionary title</StyledLabel>
        <input
          name="title"
          placeholder="type title here..."
          type="text"
          required
        />
        <StyledButton>add</StyledButton>
      </StyledForm>

      {dictionaries.map(dictionary => (
        <Dictionary
          dictionary={dictionary}
          key={dictionary._id}
          onDelete={() => onDelete(dictionary)}
          onDeleteEntry={entry => onDeleteEntry(entry)}
        />
      ))}
      <StyledNavIcon className="fas fa-book" />
    </>
  )
}

DictionaryList.propType = {
  onFormSubmit: PropType.func,
  onDelete: PropType.func,
  onDeleteEntry: PropType.func,
  dictionaries: PropType.array,
}
