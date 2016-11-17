import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';

import Header from './header.component';
import Footer from './footer.component';

@pureRender
export default class BoxOffice extends Component {
	render() {
		// this is one way to enable shorthand references to props here
		const { children } = this.props;

		return (
			<div id="elevatecart" className="cart-wrap container">
					<Header />
						{children}
					<Footer />
			</div>
		);
	}
}
