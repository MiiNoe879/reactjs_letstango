import React, { Component } from "react";

class FloatingHeader extends Component {

  constructor(){
    super();
  }
  render() {

    const review = this.props.review? JSON.parse(this.props.review):''


    return (

        <nav id="floater">   
            <div className="floater">
              <div className="container">
                 <div className="row align-items-center">
                    <div className="col-md-2">
                      <img src="/images/float-logo.png"  alt="LetsTango.com" />
                    </div>
                  <div className="col-md-5">
                    <div className="floatcart-info-block">
                        <div className="media">
                            <img className="align-self-center mr-3" src={this.props.main_image} 
                            alt=""/>
                            <div className="media-body">
                              <h5 className="crop-text-1">{this.props.name}</h5>
                               
                               { review ? (

                                  <div className="rating-wraper">

                                    { review.score !=null && 

                                     <div>   

                                      <span className="rate-percentage">{review.score/2}</span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star-half-o checked"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>

                                      <span className="rate-number">{review.pro_review_count+review.user_review_count} reviews</span>
                                      
                                      </div> 

                                     }

                                </div>

                                
                                ): ( <div></div> ) }

                        </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product-price-block align-items-center">
                    <div className="selling-price">
                          AED <span>{this.props.price.AED[0].default}</span>
                      </div>

                      {this.props.offer ? (
                      <div className="slashed-price">
                          <span className="percentage">{this.props.offer}</span>
                          <span className="oldprice">{this.props.price.AED[0].default_original_formated}</span> 
                      </div>
                       ):(
                        <div className="slashed-price">&nbsp;</div>
                        )
                    }
                  </div>
                </div>
                
                <div className="col-md-2">
                  <div className="buynow-container">
                      <button role="button" className="buynowbutton">
                          Add to cart
                      </button>
                  </div>
                  <div className="seller-detail-block text-right">
                     <p>
                          Sold by <img src="/images/seller.jpg" alt="" /> <a href="#">{this.props.seller_details.name}</a> 
                      
                      </p>
                      <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        <div className="clearfix"></div>
      </nav>   

    );
  }
}
export default FloatingHeader;  
   