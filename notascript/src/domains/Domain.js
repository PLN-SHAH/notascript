import React from 'react';
import PropTypes from 'prop-types';

export default function Domain({ domain }) {
	return <li key={domain}>{domain}</li>;
}

Domain.propTypes = {
	domain: PropTypes.string
};
