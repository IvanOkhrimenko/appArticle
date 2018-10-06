import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';*/
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker.js';
import Create from './components/Create';
import Show from './components/Show';



//import RouterMapping from './RouterMapping';
const RouterMapping = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/create' component={Create} />
      <Route path='/show/:id' component={Show} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <RouterMapping />,
  document.getElementById('root')
);

registerServiceWorker();