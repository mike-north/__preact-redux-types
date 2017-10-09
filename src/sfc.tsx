import { h } from 'preact';
import { connect } from 'preact-redux';
import { AppState } from './store';

const SFC = () => (
  <div>Functional component</div>
);

const mapStateToProps = (state: AppState) => ({
	todos: state.todos
});

const ConnectedSFC = connect(mapStateToProps)(SFC);

export default ConnectedSFC;