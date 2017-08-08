import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Video from './components/Video'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
	  <div>
	    <Route path="/" component={App} />
	    <Route path="/:id" component={Video} />
	  </div>
  </BrowserRouter>
), document.getElementById('app'))

registerServiceWorker()
