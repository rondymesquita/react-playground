import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

import { Menu } from './menu.jsx';

class Hello extends React.Component {

	constructor(){
		super()
		this.shouldNotPass = false;
	}

	onClickListener() {
    	alert("here")
  	}

	render(){
		if(this.shouldNotPass){
			return <h1 className="fontRed">{this.shouldNotPass}</h1>;
		}
		return(
			<div>
				<Menu/>
				<h1>Run you fools! - {this.constructor.shouldNotPass}</h1>
				<Button onClick={this.onClickListener}>Default</Button>
			</div>
		);
	}
}

class Index extends React.Component {

	constructor(){
		super()
		
		this.state = {
			shouldNotPass: false,
		}
	}

	onClickListener() {
    	alert("here")
  	}

	render(){
		if(this.shouldNotPass){
			return <h1>{this.state.shouldNotPass}</h1>;
		}
		return(
			<div>
				<Menu/>
				<h1>Run you fools! - {this.state.shouldNotPass}</h1>
				<Button onClick={this.onClickListener}>Default</Button>
			</div>
		);
	}
}

ReactDOM.render(<Index/>, document.getElementById('root'));