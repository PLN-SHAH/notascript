import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Work from './Work';
import Test from './Test';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

const StyledOutput = styled.section`
	border: 1px solid black;
	font-size: 3em;
	max-width: 100vw;
	word-break: break-all;
`;

export default class App extends Component {
	state = {
		outputStream: [],
		actualSign: ''
	};

	handleButtonClick(label) {
		console.log('handleButtonClick', label);
		const content = label;

		this.setState({
			actualSign: content,
			outputStream: [...this.state.outputStream, content]
		});
		if (this.state.outputStream.length % 4 === 0) {
			this.sliceArray(this.state.outputStream);
		}
	}

	sliceArray(array) {
		let slicedArray = [];

		for (let i = 0; i < array.length; i += 4) {
			slicedArray.push(array.slice(i, 4));
		}
		//dev:	console.log(slicedArray, 'sliced array');
		return slicedArray;
	}

	render() {
		return (
			<main>
				<Header />
				<section>
					<Switch>
						<Route exact path='/test' component={Test} />
						<Route exact path='/work' component={Work} />
					</Switch>
				</section>
				<Footer />
			</main>
		);
	}
}
