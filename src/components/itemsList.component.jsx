import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import ui from 'redux-ui-shallow';

import ItemCard from './itemCard.component';

@ui({
	shallowCompare: true
})
@pureRender
export default class ItemsList extends Component {
	componentWillMount() {
		this.refresh();
	}

	render() {
		return (
			<div>
				<ul>
					{ this.renderItems() }
				</ul>
			</div>
		);
	}

	renderItems = () => {
		const { items } = this.props;
		return items.map((item) => {
			return (
				<li key={ item.id }>
					<ItemCard
						item={ item }
					/>
				</li>
			);
		});
	};

	refresh = () => {
		this.props.dispatch.fetchItems();
	};
}
