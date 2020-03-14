import React from 'react';

import { Card } from '../card/card.component';

// import '../card-list.styles.css';

export const NewContact = (props) => (
	<div className="card-list">
		{props.addressbook.map((addressbook) => <Card key={addressbook.id} addressbook={addressbook} />)}
	</div>
);
