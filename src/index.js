import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Video from './components/Video'
import Home from './components/Home'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
	  <div>
	    <App>
	    	<Route exact path="/" component={Home} />
	    	<Route path="/:id" component={Video} />
	    </App>
	  </div>
  </BrowserRouter>
), document.getElementById('app'))

registerServiceWorker()
