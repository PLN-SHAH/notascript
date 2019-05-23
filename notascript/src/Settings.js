import NavLink from './NavLink.js';
import React, { Component } from 'react';
import DocumentList from './DocumentList';
import ReactSVG from 'react-svg';

export default class Settings extends Component {
	state = {
		documents: [
			{
				title: 'filename1',
				description: 'some description for filename1',
				domains: ['domain1', 'domain2', 'domain3']
			},
			{
				title: 'filename2',
				description: 'some description for filename2',
				domains: ['domain1', 'domain2', 'domain3']
			},
			{
				title: 'filename3',
				description: 'some description for filename3',
				domains: ['domain1', 'domain2', 'domain3']
			}
		]
	};
	render() {
		return (
			<>
				<section>
					Add new file
					<button>
						<NavLink to='/create'>
							<ReactSVG src='icon-add.svg' alt='create new file button' />
						</NavLink>
					</button>
				</section>
				<DocumentList documentList={this.state.documents} />
			</>
		);
	}
}
