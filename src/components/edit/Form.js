import PropType from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { NavIcon, SymbolsPreview } from '../../misc/Style.js'

const StyledButton = styled.button`
  background-color: #7cd365;
`

const StyledForm = styled.form`
  height: unset;
  grid-template-rows: unset;
  border-top: 5px solid #7cd365;
`

const StyledLabel = styled.label`
  font-weight: bold;
  color: #7cd365;
`

const StyledSymbols = styled(SymbolsPreview)``

const StyledPreviewText = styled.p`
  margin: 0;
  margin-bottom: 10px;
`

const StyledNavIcon = styled(NavIcon)``

export default function EditForm({ onFormSubmit, selectedDocument }) {
  const { title, description, _id, symbols } = selectedDocument || {}

  function handleOnSubmit(event) {
    event.preventDefault()

    const form = event.target
    const title = form.title.value
    const description = form.description.value

    onFormSubmit({
      title,
      description,
      symbols,
      _id,
    })
  }

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <StyledLabel htmlFor="title">edit title</StyledLabel>
      <input
        name="title"
        placeholder="type title here..."
        type="text"
        defaultValue={selectedDocument && title}
        required
      />
      <StyledLabel htmlFor="description">edit description</StyledLabel>
      <textarea
        name="description"
        placeholder="type description here..."
        type="text"
        defaultValue={selectedDocument && description}
        required
      />
      <StyledPreviewText>
        <StyledLabel>preview:</StyledLabel>
      </StyledPreviewText>
      <StyledSymbols>{selectedDocument && symbols}</StyledSymbols>
      <StyledButton>save</StyledButton>
      <StyledNavIcon className="fas fa-copy" />
    </StyledForm>
  )
}

EditForm.propType = {
  onFormSubmit: PropType.func.isRequired,
  selectedDocument: PropType.object,
}
