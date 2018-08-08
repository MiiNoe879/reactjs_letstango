import React, { Component } from "react";
import CartContent from "./cartcontent";
import CartMenu from "./cartmenu";
import RelatedProducts from "../catalog/product/relatedproduct"

class Cart extends Component {

	constructor(porps){
		super()

	}
	 
	render(){
		return(
		<div>

			<section id="cart_page">
				<div className="container">
		    		<div className="row">
						<CartContent/>
						<CartMenu/>
					</div>
				</div>
			<div className="clearfix"></div>

			</section>

			<RelatedProducts relatedproduct={this.props.relatedproduct}/>

		</div>

			
		);
	}
}
export default (Cart);