import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import pureRender from 'pure-render-decorator';

@pureRender
class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.reset();
        this.props.initialize({todoTitle: this.props.todo.title, todoMessage: this.props.todo.message});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <Field name="todoTitle" type="text" component="input" autoFocus />

                </div>
            </form>
        );
    }

    handleSubmit(e) {
        console.log('test');
        e.preventDefault();
        console.log(e);
    }
}

TodoForm = reduxForm({
    form: 'todo'
})(TodoForm);

export default TodoForm;