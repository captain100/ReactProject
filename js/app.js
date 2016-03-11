import React from 'react'
import {render} from 'react-dom'



let App = React.createClass({
	render(){
		return <div>
			<h2>邱实</h2>
		</div>
	}
})

render(<App/> ,document.getElementById('react'));