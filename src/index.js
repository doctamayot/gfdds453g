import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';


// Implementa las rutas aca
const rutas = (
<Router history={browserHistory} >
 <Route path="/" component={App}>
  <IndexRoute component={Page1} />
  <Route path="Page2" component={Page2} />
  <Route path="*" component={NotFound}></Route>
 </Route>
</Router>
)

ReactDOM.render(
  rutas , // Es posible que tengas que hacer un cambio en esta linea.
  document.getElementById('root')
);
