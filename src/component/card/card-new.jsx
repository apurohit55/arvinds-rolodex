import React from 'react';

import './card.styles.css';

export const CardNew = (props) => (
	<div className="card-container">
		<ul>
			<li>
				First Name: <input type="text" />
			</li>
			<li>
				Email: <input type="email" />
			</li>
			<li>
				Phone: <input type="text" />
			</li>
			<li>
				Suit: <input type="text" />
			</li>
			<li>
				Street: <input type="text" />
			</li>
			<li>
				City: <input type="text" />
			</li>
			<li>
				Zip: <input type="text" />
			</li>
		</ul>
		<button onClick={props.addContact}>Save</button>
	</div>
);
