import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';

import PanelNav from './panels/nav.component';

@pureRender
export default class CartIntro extends Component {
	render() {
		return (
			<div className="cart-intro row">
				<h1>Choose your ticket type</h1>
				<PanelNav />
			</div>
		);
	}
}
