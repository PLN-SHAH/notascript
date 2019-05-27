import React from 'react';
import PropTypes from 'prop-types';
import Domain from './Domain';

export default function DomainList({ domainList }) {
	return (
		<>
			{domainList.map(domain => (
				<Domain domain={domain} />
			))}
		</>
	);
}

DomainList.propTypes = {
	domainList: PropTypes.array
};
