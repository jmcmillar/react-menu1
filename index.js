import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Menu from './Menu';
import data from "./menustuff"; 
import DropDown from './DropDown';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      menu: []
    };
  }

  componentDidMount() {
                this.setState({
                    menu: data
                });
    }

  render() {
    return (
      <div>
        <DropDown menu={this.state.menu}/>
        <Menu menu={this.state.menu}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
