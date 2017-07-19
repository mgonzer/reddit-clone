import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PostsIndex from './components/posts_index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
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
