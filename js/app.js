
import '../css/style.css'

import React from 'react'
import { render } from 'react-dom'
import { Router , Route, Link, browserHistory, RouteHandler} from 'react-router'

import Login from './login.js'


let App = React.createClass({
	render(){
		return( <div className="nav">
			<Link to="app">home</Link>
			<Link to="login">Login</Link>
			<img src="../img/-__(11).jpg" />
			<div>adsfdas</div>
		</div>
		)
		// return (
		// 	<div>qiushi</div>
		// 	)
	}
})



// let routers = (
// 	<Route name="app" path="/" handler={App}>
// 		<Route name="login" path="/login" handler={Login} />

// 	</Route>
// )

// render(<App />, document.getElementById('react'));

// Router.run(routers ,function(Handler){
// 	render(<Handler/> ,document.getElementById('react'));
// })

let testRouter = (
	<Router history={browserHistory}>
		<Route name="app"  path="/" component={App} />		
		<Route name="login" path="/login" component={Login} /> 
	</Router>

	)

render(testRouter,document.getElementById('react'))
