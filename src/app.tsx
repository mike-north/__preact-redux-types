import { h, Component } from 'preact';

interface AppProps {
  foo: string;
}

class App extends Component<AppProps,{}> {
  render() {
    return (
      <div className="app-component">
        {this.props.foo}
      </div>
    )
  }
}

export default App;