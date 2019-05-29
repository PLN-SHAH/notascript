import React from 'react';
import PropTypes from 'prop-types';
import Domain from './Domain.js';
import styled from 'styled-components';
import { DomainList as Domainlist } from '../misc/Style.js';

const StyledDomainlist = styled(Domainlist)``;

export default function DomainList({ domainList }) {
	return (
		<StyledDomainlist>
			{domainList.map(domain => (
				<Domain domain={domain} key={domain} />
			))}
		</StyledDomainlist>
	);
}

DomainList.propTypes = {
	domainList: PropTypes.array
};
