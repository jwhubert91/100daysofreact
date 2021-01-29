import React from 'react';
import Posts from './Posts';
import Post from './Post';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app_container">
      <Router>
        <Switch>
          <Route path='/post/:id'>
            <Post />
          </Route>
          <Route path='/'>
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;