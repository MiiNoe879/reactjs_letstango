import React, { Component } from "react";
import Cart from "..//components/cart/cart"
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import Category from "../components/catalog/category";
import Product from "../components/catalog/product";

class CartPage extends Component {
 
	render(){

		return(
			<div>
	  			<Header/>
	          	<MobileIconMenu />
	          	<Menu />
				<Cart/>
				<Footer />
	        	<div className="clearfix"></div>
        	</div>

		);
	}

}
export default CartPage;