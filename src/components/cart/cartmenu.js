import React, { Component } from "react";

class CartMenu extends Component {

	constructor(porps){
		super()

	}
	 
	render(){
		return(
			<div className="col-lg-3 col-12 cart-right-body">
			    <div id="free-ship-rater" className="row">
			        <div className="tittle-block col-12">
			            <p>Congrats! You’ve earned FREE shipping</p>
			        </div>
			        <div className="rate-bar col-12">
			            <div className="progress">
			                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style={{width: (98)+'%'}}>
			                </div>
			            </div>
			            <div className="free-ship-rate">
			                <span className="pull-left">AED 0</span>
			                <span className="pull-right">AED 200</span>
			            </div>
			        </div>
			    </div>
			    <div id="invoice-wrap" className="row">
			        <div className="col-12 apply-coupon">
			            <div className="input-group mb-3 ">
			                <input type="text" id="name" className="form-control" required/>
			                <label className="form-control-placeholder" for="name">Enter coupon code</label>
			                <button className="btn btn-outline-secondary" type="button" id="button-addon2">APPLY</button>
			            </div>
			        </div>
			        <div className="col-12 order-summary">
			            <h5>Order Summary</h5>
			            <p>Subtotal <span className="price pull-right">AED 123133.90</span></p>
			            <p>Discount <span className="discount pull-right">AED 3133.90</span></p>
			            <p>Shipping <span className="shiping pull-right">AED 133.90</span></p>
			            <p>Shipping <span className="shiping-free pull-right">Free</span></p>
			            <hr/>
			            <p className="grand-total"><span className="total">Total</span> <small>(Inclussive of VAT)</small> <span class="total-price pull-right">AED 123133.90</span></p>
			            <p className="emi-cart">EMI is available for this purchase.</p>
			        </div>
			    </div>
			    <div id="secure-checkout-container" className="row buynow-container">
			        <button role="button" className="buynowbutton">
			        SECURE CHECKOUT
			        </button>
			    </div>
			    <div id="payment-option" className="row payment-option-container">
			        <ul>
			            <li><img src="images/pay1.png"/></li>
			            <li><img src="images/pay2.png"/></li>
			            <li><img src="images/pay3.png"/></li>
			            <li><img src="images/pay4.png"/></li>
			            <li><img src="images/pay5.png"/></li>
			            <li><img src="images/pay6.png"/></li>
			        </ul>
			    </div>
			</div>
			
		);
	}

}
export default CartMenu;