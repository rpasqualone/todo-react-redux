import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import pureRender from 'pure-render-decorator';

const renderInput = (field) => (
	<span>
		{	console.log(field.error) }
		<input {...field.input } { ...field } />
		{field.error && <span>{field.error}</span>}
	</span>
);

const validate = values => {
	const errors = {};

	if (!values.title) {
		errors.title = 'Required';
	}
	if (!values.message) {
		errors.message = 'Required';
	}

	return errors;
};

@pureRender
@reduxForm({form: 'todo', destroyOnUnmount: false, validate})
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
					<Field name="title" component={ renderInput } placeholder="Title" autoFocus="true"/>
					<Field name="message" component={ renderInput } placeholder="Details" />
					<button type="submit" style={{ display: 'none' }}>Submit</button>
				</form>
				<button className="btn btn-danger" onClick={this.props.handleDelete}>Delete</button>
			</div>
		);
	}
}

export default TodoForm;
