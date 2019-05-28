import React from 'react';
import Document from './Document';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDocumentList = styled.section`
	padding: 20px;
`;
export default function DocumentList({ documentList, onDelete }) {
	return (
		<StyledDocumentList>
			{documentList.map(document => (
				<Document
					key={document}
					document={document}
					onDelete={() => onDelete(document)}
					{...document}
				/>
			))}
		</StyledDocumentList>
	);
}

DocumentList.propTypes = {
	documentList: PropTypes.array,
	onDelete: PropTypes.func
};