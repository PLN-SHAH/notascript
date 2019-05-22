import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Work from './Work';
import Home from './Home';
import Settings from './Settings';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
	state = {
		outputStream: [],
		actualSign: ''
	};

	handleButtonClick(label) {
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
		console.log('slicedArray', slicedArray);

		for (let i = 0; i < array.length; i += 4) {
			slicedArray.push(array.slice(i, 4));
		}
		return slicedArray;
	}

	render() {
		return (
			<main>
				<Header />
				<section>
					<Switch>
						<Route exact path='/test' component={Home} />
						<Route
							path='/work'
							render={props => (
								<Work
									output={this.state.outputStream}
									handleButtonClick={label => this.handleButtonClick(label)}
									{...props}
								/>
							)}
						/>
						<Route exact path='/home' component={Home} />
						<Route exact path='/settings' component={Settings} />
						<Route path='/not-found' component={() => <h1>Not Found</h1>} />
					</Switch>
				</section>
				<Footer />
			</main>
		);
	}
}
