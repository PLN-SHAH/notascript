import NavLink from '../../app/NavLink.js'
import PropType from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 20px;
`

const StyledTitle = styled.h4`
  font-weight: bold;
  color: #2eadd3;
`
const StyledIcons = styled.section`
  text-align: right;

  i {
    color: #373f43;
  }
`

const StyledButton = styled.button`
  font-size: 1em;
`

export default function Dictionary({ dictionary, onDelete }) {
  const { title, _id } = dictionary

  return (
    <StyledContainer>
      <NavLink to={`/dictionariesE/${_id}`}>
        <StyledTitle>{title}</StyledTitle>
      </NavLink>
      <StyledIcons>
        <NavLink to={`/dictionariesE/${_id}`}>
          <i className="far fa-edit" />
        </NavLink>
        <StyledButton onClick={onDelete}>
          <i className="fas fa-trash-alt" />
        </StyledButton>
      </StyledIcons>
    </StyledContainer>
  )
}

Dictionary.propType = {
  dictionary: PropType.shape({
    _id: PropType.number,
    title: PropType.string.isRequired,
  }),
  onDelete: PropType.func,
}
