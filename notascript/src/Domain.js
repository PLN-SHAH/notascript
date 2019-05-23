import React from 'react';

export default function DocumentList({ domainList }) {
	return (
		<>
			{domainList.map(domain => (
				<li>{domain}</li>
			))}
		</>
	);
}
