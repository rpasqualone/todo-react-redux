import React, {Component} from 'react';
import pureRender from 'pure-render-decorator';
import _ from 'lodash';

import NavTile from './navtile.component';

const navTilesConfig = [
    {
        priority: 1,
        code: 1111,
        icon: 'tickets',
        label: 'General Admission'
    }, {
        priority: 2,
        code: 1112,
        icon: 'reserved-seating',
        label: 'Reserved Seating'
    }, {
        priority: 3,
        code: 1113,
        icon: 'cloudy',
        label: 'Camping'
    }, {
        priority: 4,
        code: 1114,
        icon: 'add-on',
        label: 'Parking & Add Ons'
    }
];


@pureRender
export default class PanelNav extends Component {
    render() {
        return (
            <div className="ticket-types text-center">
                {this.renderNavTiles()}
            </div>
        );
    }

	renderNavTiles() {
		var navTiles = _.sortBy(navTilesConfig, 'priority');
		return navTiles.map((navTile) => {
			return (
				<NavTile key={navTile.code} params={navTile} ></NavTile>
			);
		})
	}
}
