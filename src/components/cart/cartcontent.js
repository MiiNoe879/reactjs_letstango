import React, { Component } from "react";

class CartContent extends Component {

	constructor(porps){
		super()



	}
	 
	render(){
		return(

			<div className="col-lg-9 col-12 cart-left-body">
    
        	<div id="tille-block" className="row align-items-center">
                    <div  className="col-12">
                        <h1 className="tittle"><span className="mobleft">My Cart</span> <span className="mobright">(4 Items)</span></h1>
                    </div>
        	</div>
            
            <div id="cart-tems-wraper">
            
            <div className="row cart-list align-items-center">
                <div className="col-lg-2 col-3">
                	 <img className="align-self-center mr-3 thump_img" src="https://www.letstango.com/media/catalog/product/cache/1/thumbnail/380x/9df78eab33525d08d6e5fb8d27136e95/n/k/nk-d610body-1.png" alt=""/>
                </div>
                
                <div className="col-lg-8 col-9">
                	<h5 className="crop-text-2">Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White</h5>
                    <div className="selling-price">
                       AED <span>23,456.96</span>
                    </div>
                    <div className="seller-detail-block">
                        <p>
                          Sold by <img src="images/seller.jpg" alt=""/> <a href="#">Letstango</a></p>
                     </div>
                <div className="clearfix"></div>    
                </div>
                
                
                <div className="col-lg-2 col-12 d-flex align-items-end flex-column ">
                
                    <div className="select-quantity mb-auto p-2">	
                        <select className="custom-select">
                            <option selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                       </select>
                    </div>
                    
                    <div className="remove-button p-2">
                    	<a href="#"><i className="fa fa-trash"></i> remove</a>
                    </div>
                   
                </div>
            </div>
            
            
            
            <div className="row cart-list align-items-center">
                <div className="col-lg-2 col-3">
                	 <img className="align-self-center mr-3 thump_img" src="https://www.letstango.com/media/catalog/product/cache/1/thumbnail/380x/9df78eab33525d08d6e5fb8d27136e95/n/k/nk-d610body-1.png" alt=""/>
                </div>
                
                <div className="col-lg-8 col-9">
                	<h5 class="crop-text-2">Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White</h5>
                    <div className="selling-price">
                       AED <span>23,456.96</span>
                    </div>
                    <div className="seller-detail-block">
                        <p>
                          Sold by <img src="images/seller.jpg" alt=""/> <a href="#">Letstango</a>                        </p>
                     </div>
                <div className="clearfix"></div>    
                </div>
                
                
                <div className="col-lg-2 col-12 d-flex align-items-end flex-column ">
                
                    <div className="select-quantity mb-auto p-2">	
                        <select className="custom-select">
                            <option selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                       </select>
                    </div>
                    
                    <div className="remove-button p-2">
                    	<a href="#"><i className="fa fa-trash"></i> remove</a>
                    </div>
                   
                </div>
            </div>
            
            
            
            
            
            
            <div className="row cart-list align-items-center">
                <div className="col-lg-2 col-3">
                	 <img className="align-self-center mr-3 thump_img" src="https://www.letstango.com/media/catalog/product/cache/1/thumbnail/380x/9df78eab33525d08d6e5fb8d27136e95/n/k/nk-d610body-1.png" alt=""/>
                </div>
                
                <div className="col-lg-8 col-9">
                	<h5 className="crop-text-2">Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White</h5>
                    <div className="selling-price">
                       AED <span>23,456.96</span>
                    </div>
                    <div className="seller-detail-block">
                        <p>
                          Sold by <img src="images/seller.jpg" alt=""/> <a href="#">Letstango</a>                        </p>
                     </div>
                <div className="clearfix"></div>    
                </div>
                
                
                <div className="col-lg-2 col-12 d-flex align-items-end flex-column ">
                
                    <div className="select-quantity mb-auto p-2">	
                        <select className="custom-select">
                            <option selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                       </select>
                    </div>
                    
                    <div className="remove-button p-2">
                    	<a href="#"><i className="fa fa-trash"></i> remove</a>
                    </div>
                   
                </div>
            </div>
            
            
            </div>
         
      
        	<div id="continue-shop" className="row">
            	<div id="secure-checkout-container " className="col-12 buynow-container">
                          <button type="button" className="btn btn-outline-dark btn-sm">Continue shopping</button>
                  </div>
            </div>
        
            
        </div>
				
		);
	}

}
export default (CartContent);