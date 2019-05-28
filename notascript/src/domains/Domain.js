import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DomainTag } from '../misc/Style.js';

const StyledDomainTag = styled(DomainTag)``;

export default function Domain({ domain }) {
	return <StyledDomainTag key={domain}>{domain}</StyledDomainTag>;
}

Domain.propTypes = {
	domain: PropTypes.string
};
