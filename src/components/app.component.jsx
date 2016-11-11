import React, {Component} from 'react';
import pureRender from 'pure-render-decorator';

import TodoList from './todoList.container';

@pureRender
export default class App extends Component {
    render() {
        return (
            <div>
                <div>test</div>
                { this.props.children }
            </div>
        );
    }
}
