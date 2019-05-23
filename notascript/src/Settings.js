import React, { Component } from 'react';
import Documents from './Documents';

export default class Settings extends Component {
	state = {
		documents: [
			{ title: 'filename1', description: 'some description for filename1' },
			{ title: 'filename2', description: 'some description for filename2' },
			{ title: 'filename3', description: 'some description for filename3' }
		]
	};

	renderDocumentList(array) {
		console.log(array);
	}

	render() {
		const { documents } = this.state;
		return (
			<div>
				<Documents documentList={this.state.documents} />
				<h1 render={this.renderDocumentList(documents)}>Settings</h1>
			</div>
		);
	}
}
