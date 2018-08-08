import React, { Component } from "react";

import ProductBreadCrumb from "./product/productbreadcrumb";
import ProductContents from "./product/productcontents";
import ProductImages from "./product/productimages";
import ProductSpecs from "./product/productspecs";
import FloatingHeader from "./product/floatingheader";
import RelatedProduct from "./product/relatedproduct"

class Product extends Component {



	render() {

		return (
			<section id="product-page">    		
    			{this.props ?(
					<div>
						{this.props.is_in_stock == "true" &&
							<FloatingHeader { ...this.props} />
						}	
					</div>
    			):(<div></div>)}
    			

    			<div className="container">
    				<div className="row">
			            <ProductBreadCrumb />
			        </div>
			        <div id="first-block" className="row">
			        	<ProductImages mainImage = {this.props.main_image} images = {this.props.images}/>
			        	<ProductContents { ...this.props}/>
			        </div>
			        <RelatedProduct relatedproduct ={this.props.related_products}/>
			        <ProductSpecs { ...this.props}/>
    			</div>

			</section>
		);
	}
}
export default Product;