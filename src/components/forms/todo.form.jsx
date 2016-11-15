import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import pureRender from 'pure-render-decorator';

function renderField ({ name, input, label, type, meta: { touched, error, warning }, ...props }) {
	return <input { ...input } placeholder={ label } type={ type } { ...props } />;
}

@pureRender
@reduxForm({form: 'todo'})
class TodoForm extends Component {
	componentDidMount() {
		const { todo } = this.props;

		this.props.initialize({ title: todo.title, message: todo.message });
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={ handleSubmit }>
					<Field name="title" type="text" component={ renderField } label="Title" props={{ autoFocus: true }} />
					<Field name="message" type="text" component={ renderField } label="Details" />
					<button type="submit" style={{ display: 'none' }}>Submit</button>
				</form>
				<button className="btn btn-danger" onClick={this.props.handleDelete}>Delete</button>
			</div>
		);
	}
}

export default TodoForm;
