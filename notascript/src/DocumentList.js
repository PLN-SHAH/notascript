import React from 'react';
import Document from './Document';
import PropTypes from 'prop-types';

export default function DocumentList({ documentList }) {
	return (
		<>
			{documentList.map(document => (
				<Document key={document} document={document} />
			))}
		</>
	);
}
DocumentList.propTypes = {
	documentList: PropTypes.array
};
