import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Callback from './Callback';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={"Demo of usememo"} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
