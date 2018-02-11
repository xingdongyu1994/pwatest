
require('offline-plugin/runtime').install()
// console.log("法萨芬手动阀sad",process)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers'
import Other from './commponents/Other'
import Page from './commponents/Page'
import { Router, Route, Link } from 'react-router'

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="page" component={Page} />
      <Route path="other" component={Other} />
    </Route>
  </Router>
), document.getElementById('root'))
