import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';

import Header from './boxoffice/header.component';
import Footer from './boxoffice/footer.component';

@pureRender
export default class BoxOffice extends Component {
	render() {
		return (
			<div id="elevatecart" className="cart-wrap">
					<Header />
					{this.props.children}
					<Footer />
			</div>
		);
	}
}
