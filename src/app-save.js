import React, { Component } from 'react';
// import logo from './logo.svg';
// import * as users from './addressbook.json';

import './App.css';

import { CardList } from './component/card-list/card-list.component';
import { CardNew } from './component/card/card-new';

class App extends Component {
	constructor() {
		super();
		this.state = {
			addressbook: [],
			searchField: ''
		};

		this.addContact = this.addContact.bind(this);
	}

	componentDidMount() {
		// console.log(users);
		fetch('./addressbook.json').then((response) => response.json()).then((users) => {
			this.setState({ addressbook: users });
		});
	}

	addContact() {
		/*
			copy or clone the addressbook
			build a new json object.
			
			"{ 
				"id" : lastid +1
				"first_name": "Indraneel",
				"last_name": "Purohit",
				"name": "Indraneel Purohit",
				"email": "indraneelpurohit@gmail.com",
				"gender": "Male",
				"ip_address": "229.179.4.212",
				"address": {
					"street": "Dunhams Corner Road",
					"suite": "302",
					"city": "East Brunswick",
					"zipcode": "08816"
				},
				"phone": "732-618-4357",
				"image": "indraneel.jpg"
			}"
			push to address book the following
		*/
		const newContact = {
			first_name: 'manju'
		};
		this.setState({
			addressbook: [ ...this.state.addressbook, newContact ]
		});
	}

	render() {
		const { addressbook, searchField } = this.state;
		const filteredaddressbook = addressbook.filter((addressbook) =>
			addressbook.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Arvind's Address book</h1>
				<input
					type="search"
					placeholder="search name"
					onChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList addressbook={filteredaddressbook} />
				<CardNew addContact={this.addContact} />
			</div>
		);
	}
}

export default App;
