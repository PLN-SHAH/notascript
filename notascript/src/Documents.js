import React from 'react';
import Document from './Document';

export default function Documents({ documentList }) {
	return (
		<>
			{documentList.map(document => (
				<Document key={document} document={document} />
			))}
		</>
	);
}
