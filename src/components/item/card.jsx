import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';


var styles = {
  ticketRight: {
	  'background-color': 'magenta'
  }
},
props = {
	ticket: {
		title: 'Full Event Pass',
		description: '4-Day Festival Pass'
	}
}


@pureRender
export default class Card extends Component {


	render() {
		return (
			<div href="#ticket0" className="item col-xs-12 col-sm-6 col-md-6 col-lg-4 open-modal">
				<div className="ticket-stub inner">
					<div className="row">
						<div className="col-xs-2 visible-xs">
							<div className="icon icon-tickets"></div>
						</div>
						<div className="ticket-left col-xs-6 col-sm-9">
							<div className="ticket-title">{props.ticket.title}</div>
							<div className="ticket-sub-title">{props.ticket.description}</div>
						</div>
						<div className="ticket-right col-xs-2 col-sm-3 text-center" style={styles.ticketRight}>
							<div className="ticket-price">$125</div>
							<div className="hidden-xs icon icon-tickets ticket-type-icon"></div>
							<a href="index.php" className="hidden-xs icon-quick-add quick-add" title="Add Item to Cart"></a>
						</div>
						<div className="col-xs-2 visible-xs text-center">
							<div className="icon icon-collapse"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
