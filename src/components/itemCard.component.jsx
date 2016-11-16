import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import ui from 'redux-ui-shallow';

import { Button, Modal } from 'react-bootstrap';

@ui(
	{shallowCompare: true}
)
@pureRender
export default class Temp extends Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				<h3>{ item.title }</h3>
				<h4>{ item.details }</h4>
				<div>
					<span><i className="glyphicon glyphicon-calendar" /> { item.date }</span>
				</div>
				<div>
					<span><i className="glyphicon glyphicon-map-marker" /> { item.location }</span>
				</div>
			</div>
		);
	}
}
