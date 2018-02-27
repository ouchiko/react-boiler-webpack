import React, { Component } from 'react'

 /* Helpers */

 /* CSS */
 import styles from "../../css/Counter.scss";

 class Counter extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.state = {};
 	}

 	render() {
        console.dir(styles);
 		return (
 		    <div className="counter">This is my counter</div>
 		)
 	}
 }

 export default Counter;
