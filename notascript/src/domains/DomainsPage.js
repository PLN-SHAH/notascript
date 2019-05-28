import React from 'react';
import DomainList from '../Documents/DomainList.js';
import PropType from 'prop-types';

export default function DomainsPage({ domainList }) {
	return (
		<>
			<DomainList domainList={domainList} />
		</>
	);
}

DomainsPage.propType = {
	domainList: PropType.array
};
