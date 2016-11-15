import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import ui from 'redux-ui-shallow';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';

import { Button, Modal } from 'react-bootstrap';

@ui({shallowCompare: true})
@pureRender
export default class Temp extends Component {
	render() {
		return (
			<div>
				<DatePicker hintText="Portrait Dialog" />
				<RaisedButton label="Default" />
				<TimePicker
					hintText="12hr Format"
				/>
				<Button onClick={this.handleModal}>Test</Button>
				<Modal show={this.props.ui.showModal} onHide={this.handleModal}>
					<Modal.Header>Test</Modal.Header>
					<Modal.Body>Body Test</Modal.Body>
				</Modal>
			</div>
		);
	}

	handleModal = () => {
		this.props.updateUI('showModal', !this.props.ui.showModal);
	};
}
