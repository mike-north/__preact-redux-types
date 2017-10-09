import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { AppState } from './store';
import SFC from './sfc';

interface AppProps {
  foo: string;
}

class App extends Component<AppProps,{}> {
  render() {
    return (
      <div className="app-component">
        <SFC />
        {this.props.foo}
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
	todos: state.todos
});

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;