import React from 'react';
import Document from './Document';

export default function DocumentList({ documentList }) {
	return (
		<>
			{documentList.map(document => (
				<Document key={document} document={document} />
			))}
		</>
	);
}
