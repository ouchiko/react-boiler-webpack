import React, { Component } from 'react'

 /* CSS */
 import Counter from "./Counter";

 class Application extends Component {

 	constructor(props, context) {
 		super(props, context);
 		this.state = {};
 	}

 	render() {
 		return (
     	      <div>
                This is the application but  is it
                <Counter/>
              </div>
 		)
 	}
 }

 export default Application;
