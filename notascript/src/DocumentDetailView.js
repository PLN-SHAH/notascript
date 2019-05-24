import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSymbols = styled.section`
	font-size: 3em;
	border-top: 1px solid #562323;
`;

const StyledTitle = styled.h4`
	font-size: 2rem;
	margin: 0;
	color: #562323;
`;

const StyledDetailsView = styled.section`
	padding: 20px;
	display: grid;
	grid-template-rows: 50px 100px auto auto-fill;
`;

const StyledDomainList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;

	> li {
		margin: 5px 10px;
		background-color: #562323;
		color: white;
		padding: 10px;
	}
`;

export default function DocumentDetailView({ props }) {
	return (
		<StyledDetailsView>
			<StyledTitle>filename</StyledTitle>
			<p>description</p>
			<StyledDomainList>
				domains
				<li>domain</li>
				<li>domain</li>
			</StyledDomainList>
			<StyledSymbols>symbols</StyledSymbols>
		</StyledDetailsView>
	);
}

DocumentDetailView.propTypes = {
	//domainList: PropTypes.array
};
