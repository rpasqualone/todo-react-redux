import React from 'react';
import {Link} from 'react-router';

import Header from './header.component';

export default function(props) {
	return (
		<div>
			<Header />
			<div style={{background: '#f3f4f5'}}>
				<Link to="/">This will link you home</Link>
				<div>404</div>
			</div>
		</div>
	);
}
