import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';

import { Link } from 'react-router';

@pureRender
export default class PanelNavTile extends Component {
	render() {
		return (
			<Link to="/boxoffice/panels/{this.props.panelId}">
				<div className="lv8-{this.props.panelId} lv8-item">
		            <i className="{this.props.panelIconClass}"></i>
		            <h5>{this.props.panelLabel}</h5>
				</div>
	        </Link>
		);
	}
}
