import React from 'react';
import PropTypes from 'prop-types';

export default function DomainList({ domainList }) {
	return (
		<>
			{domainList.map(domain => (
				<li key={domain}>{domain}</li>
			))}
		</>
	);
}

DomainList.propTypes = {
	domainList: PropTypes.array
};
