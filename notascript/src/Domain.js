import React from 'react';

export default function DomainList({ domainList }) {
	return (
		<>
			{domainList.map(domain => (
				<li>{domain}</li>
			))}
		</>
	);
}
