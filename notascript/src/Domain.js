import React from 'react';
import PropTypes from 'prop-types';

export default function DomainList({ domainList }) {
	return (
		<>
			{domainList.map(domain => (
				<li>{domain}</li>
			))}
		</>
	);
}

DomainList.propTypes = {
	domainList: PropTypes.array
};
