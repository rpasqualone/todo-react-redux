import React from 'react';
import {Link} from 'react-router';

export default function(props) {
	return (
		<div>
			<div>
				<Link to="/">This will link you home</Link>
				{ props.children }
			</div>
		</div>
	);
}
