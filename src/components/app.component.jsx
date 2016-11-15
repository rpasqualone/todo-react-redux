import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

export default class MyAwesomeReactComponent extends Component {
	render() {
		return(
			<DatePicker hintText="Portrait Dialog" />
		);
	}
}

/*export default function App(props) {
	return ( props.children );
}*/
