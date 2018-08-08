import React, { Component } from "react";



class ProductNavigation extends Component {

  constructor(){
    	
    	super();
    	this.onNavigationClick = this.onNavigationClick.bind(this)

  }
  onNavigationClick(event){
  	hideSimilarProducts()
  }
  viewoffer(url){
  	window.open(url, "window-name");
  }
	render() {

		const similarProduct = this.props.similarproducts
		const productname = this.props.productname
		const productImage = this.props.productImage



		var similarProductArray = Object.values(similarProduct);



	    return (

	    	<div>
			<div id="mySidenav" className="sidenav">
	            <a href="javascript:void(0)" id="closebutton" className="closebtn" onClick={this.onNavigationClick}>&times;</a>
	                <h4>{similarProductArray.length} Offers Available</h4>
	                    <div className="compairproduct-main">
	                        <div className="media">
	                            <img className="align-self-center mr-3" src={productImage} alt=""/>
	                             <div className="media-body align-self-center mr-3">
	                                <h5 className="crop-text-2">{productname}</h5>
	                        	</div>
	                    	</div>
	                    <div className="clearfix"></div>
	                    </div>
	                 
	                    <div className="compair-product-list">
	                        
	                        {similarProductArray.map((item,index)=>

	                        	<div key={index}>
	                        		<a href={item.url}>
	                        		 <div className="row">
	                           			<div className="col-12">
	                                		<div className="product-price-block align-items-center">
	                                		{item.offer ? (
	                                    		<div className="slashed-price">
	                                        		<span className="oldprice">{item.price.AED[0].default_original_formated}</span>
	                                        		<span className="percentage">{item.offer}</span>
	                                    		</div>
	                                    		):( <span></span> )}
	                                     		
	                                     		<div className="selling-price">
	                                           		AED <span>{item.price.AED[0].default}</span>
	                                    		</div>

	                                		</div>
	                            		</div>
	                        		</div>
	                                   
	                            	<div className="row">
	                                	<div className="col-12">
	                                    	<div className="delivery-detail-block ">
	                                        	<p>Order now and receive it in <span>Dubai</span> by <span className="time">Tomorrow, Jun 7</span></p>
	                                           	<div className="clearfix"></div>
	                                   		</div>
	                               		 </div>
	                            	</div>
	                                   
	                                   
	                            	<div className="row">
	                                	<div className="col-6">
	                                    	<span className="tittle">Sold by</span>
	                                        <span className="seller-name"><a href="#">{item.seller}</a></span>
	                                 	</div>
	                                        
	                                    <div className="col-6">
	                                        <span className="tittle">Warranty</span>
	                                        <span className="seller-name">1 Year warranty</span>
	                                    </div>
	                                </div>
	                                   
	                                   
	                                <div className="row align-items-center button-block">
	                                    <div className="col-12 ">
	                                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.viewoffer.bind(this,item.product_url)}>View Offer</button>
	                                        <button type="button" className="btn cartbutton btn-sm">Add to cart</button>
	                                  	</div>
	                            	</div>
	                        		<div className="clearfix"></div>
	                        		</a>
	                        	</div>

	                        )}
	                       
	                    </div>
	                        
	                              
	          
	                           
	                   <div className="clearfix"></div> 
	           
	   
 			</div>
 			     <div onClick={this.onNavigationClick} id="mySidenav-bg"></div>
 		</div>
	    )
  }
}
export default ProductNavigation; 