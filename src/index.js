import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PostsIndex from './components/posts_index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import './style/App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root'));
registerServiceWorker();
