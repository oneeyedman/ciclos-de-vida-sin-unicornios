import React, { Component } from 'react';
import Home from './components/Home';
import Editor from './components/Editor';
import {Link, Switch, Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.saveText = this.saveText.bind(this);

    this.state = {
      mieditor: ''
    }
  }


  saveText(text) {
    this.setState({
      mieditor: text
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/" className="menu__link">Home</Link>
            </li>
            <li className="menu__item">
              <Link to="/editor" className="menu__link">Editor</Link>
            </li>
          </ul>
          </nav>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/editor" render={() => <Editor miTexto={this.state.mieditor} saveMe={this.saveText} />} />
          </Switch>
        
        </main>

      </div>
    );
  }
}

export default App;
