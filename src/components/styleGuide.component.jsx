import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';

import ItemCard from './item/card';
import ItemCardList from './item/cardList';


@pureRender
export default class StyleGuide extends Component {
	render() {
		return (
			<div className="styleguide">
				<h1>Super Awesome Style Guide</h1>
				<ul>
					<li>
						<ItemCard />
					</li>
					<li>
						<ItemCardList />
					</li>
				</ul>
			</div>
		);
	}
}
