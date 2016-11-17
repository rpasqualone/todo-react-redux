import React, {Component} from 'react';
import pureRender from 'pure-render-decorator';

import {Link} from 'react-router';

@pureRender
export default class PanelNavTile extends Component {
    render() {
        const {code: panelId, icon: panelIconClass, label: panelLabel} = this.props.params;

        return (
            <Link to={`/boxoffice/boxoffice/panels/${panelId}`}>
                <div className={'lv8-$' + {
                    panelId
                } + ' lv8-item col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-1'}>
                    <i className={panelIconClass}></i>
                    <h5>{panelLabel}</h5>
                </div>
            </Link>
        );
    }
}
