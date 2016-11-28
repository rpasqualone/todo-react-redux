import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import ui from 'redux-ui-shallow';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import { Button, Modal } from 'react-bootstrap';

@ui(
	{state: { showModal: false }, shallowCompare: true}
)
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
				<Modal show={this.props.ui.showModal} onHide={this.handleModal} className="test">
					<Modal.Header><button>Test</button></Modal.Header>
					<Modal.Body>
						<div>Body</div>
					</Modal.Body>
					<Modal.Footer>Some footer data</Modal.Footer>
					<Modal.Footer>Some footer data</Modal.Footer>
				</Modal>
				{this.props.children}
			</div>
		);
	}

	handleModal = () => {
		this.props.updateUI('showModal', !this.props.ui.showModal);
	};
}
