import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchItems } from '../actions/items.actions';
import ItemsList from '../components/itemsList.component';

function mapStateToProps(state) {
	return { items: state.items.all };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchItems }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
	return { ...ownProps, ...stateProps, dispatch: dispatchProps};
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ItemsList);
