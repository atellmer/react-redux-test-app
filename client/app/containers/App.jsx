import React, { Component } from 'react';

import BookListContainer from './BookListContainer';
import BookDetailContainer from './BookDetailContainer';

import style from './App.styl';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="row">
            <BookListContainer/>
            <BookDetailContainer/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;