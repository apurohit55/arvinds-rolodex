import React from 'react';
import '../card-list/card-list.styles.css';
import './card.styles.css';

export const Card = (props) => (
	<div className="card-container">
		<img width="100" alt="addressbook" src={`./images/${props.addressbook.image}`} />
		<h4>
			{props.addressbook.first_name} {props.addressbook.last_name} <br />
			Email: {props.addressbook.email}
		</h4>
		<ul>
			<li>Phone: {props.addressbook.phone}</li>
			<li>Suite: {props.addressbook.address.suite} </li>
			<li>Street: {props.addressbook.address.street} </li>
			<li>City: {props.addressbook.address.city} </li>
			<li>Zip: {props.addressbook.address.zipcode}</li>
		</ul>
	</div>
);
