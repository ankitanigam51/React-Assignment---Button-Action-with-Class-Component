import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};
   
	function add() {
		const res =document.getElementsByTagName("p");
		console.log(res);
	} 

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */
				<p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
				<button id="para" onClick="add()">Click Me!!</button>
				}
    		</div>
    	);
    }
}


export default App;

