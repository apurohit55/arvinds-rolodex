import React, { Component } from 'react';

import './App.css';

import { CardList } from './component/card-list/card-list.component';
//import { CardNew } from './component/card/card-new';
//import { NewContact } from './component/card/newcontact';

import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			addressbook: [],
			searchField: ''
		};

		// use arrow function
		//this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		// console.log(users);
		fetch('./addressbook.json').then((response) => response.json()).then((contacts) => {
			this.setState({ addressbook: contacts });
		});
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { addressbook, searchField } = this.state;
		const filteredaddressbook = addressbook.filter((addressbook) =>
			addressbook.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Arvind's Address book</h1>
				<SearchBox placeholder="search name" handleChange={this.handleChange} />
				<CardList addressbook={filteredaddressbook} />
			</div>
		);
	}
}

export default App;
