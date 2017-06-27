import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
	constructor(){
		super()
		this.shouldPass = false;
	}

	render(){
		if(this.shouldPass){
			return <h1>Run you fools!</h1>;
		}
		return <h1>You should not pass</h1>;
	}
}

ReactDOM.render(<Hello/>, document.getElementById('root'));