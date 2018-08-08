import React, { Component } from "react";
import SimilarProducts from "./similarproducts";

class ProductContents extends Component {

  constructor(){
    super();
  this.onNavigationClick = this.onNavigationClick.bind(this)

  }

   onNavigationClick(event){

    showSimilarProducts()

  }

  render() {

  function LoyaltyPrograms(props){



    if (props!=null) {
    const loyaltyPrograms =   props.loyalty.loyalty

        console.log(loyaltyPrograms)

    if (loyaltyPrograms!=null) {


      return (
        <div className="rewards-container">
          <span>
              
              {"AirRewards" in loyaltyPrograms  &&
                <span>
                   <img src="/images/rewards.jpg" alt="" /> Earn 100 airrewards
                </span>
              }
         
              {"JpMiles" in loyaltyPrograms &&
                <span>
                  <img src="/images/jet.jpg" alt="" /> Earn 200 Jet Previllage Points
                </span>
              }
       
              {"Airmile" in loyaltyPrograms &&
                <span>
                  <img src="/images/airmile.jpg" alt="" /> Earn 100 airrewards
                </span>
              }
  
            </span>
        </div>
        );

      }
    }
  }


    const optionMetrix = this.props.option_matrix
    var optionMetrixArray = [];
    var optionmetricsKeys = []
    
   

    for (var key in optionMetrix) {
    if (optionMetrix.hasOwnProperty(key)) {
      var val = optionMetrix[key];
  
      optionMetrixArray.push(val);
      optionmetricsKeys.push(key);
      }
    }


    const review = this.props.review? JSON.parse(this.props.review):''

    return (


        <div className="col-md-8 col-12">

          <div id="product-tittle-block" className="row">
              <div className="col-12">
                  <h1>{this.props.name}</h1>
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
                  ): ( 
                  <div></div>
                  ) }
              </div>
          </div>
          <div className="row ">
              <div className="col-md-8 col-12">
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




                  <div>
                  {this.props.option_matrix?(
                  <div className="attribute-block">
                      <form className="form-inline">
                          {optionmetricsKeys.map((item,key) => 
                          <div key={key} className="form-group mb-2 ">
                              <label>{item}</label>
                              <select className="optionmetrixselection">
                                  {optionMetrixArray[key].map((item,key) => 
                                  <option key={key} value="0">{item.label}</option>
                                  )}
                              </select>




                          </div>
                          )}
                      </form>
                  </div>

                  ): (
                  <div></div>
                  ) }
                  </div>

                  {this.props.short_description!=null &&

                    <div className="short-description-block">
                      <h5>Description</h5>
                      <span dangerouslySetInnerHTML={{__html: this.props.short_description}}></span>
                      <div className="clearfix"></div>
                  </div>

                  }
                 

                  <div className="delivery-detail-block">
                      <h5>DElivery</h5>
                      <p>Order in the next <span>13 hrs 37 mins </span> and receive it in <span>Dubai</span> by <span className="time">Tomorrow, Jun 7</span></p>
                      <div className="clearfix"></div>
                  </div>
                  <div className="warranty-detail-block">
                      <h5>Warranty <span>{this.props.warranty}</span></h5>
                      <div className="clearfix"></div>
                  </div>
                  <div className="seller-detail-block">
                      <p>
                          Sold by <img src="/images/seller.jpg" alt="" /> <a href="#">{this.props.seller_details.name}</a>
                          {this.props.similar_products !=null && 
                          <span className="comparison"><a onClick={this.onNavigationClick} className="comparisonbutton" >7 other offers</a> from AED 2,965.00</span> 
                          }
                      </p>
                      <div className="clearfix"></div>
                  </div>
                  {this.props.similar_products !=null &&
                  <SimilarProducts productname={this.props.name} productImage={this.props.main_image} similarproducts={this.props.similar_products}/>
                  }
                  <div className="share-block">
                      <div className="row">
                          <div className="col-12">
                              <button role="button" className="sharebuttton" data-toggle="collapse" data-target="#share">
                              <i className="fa fa-share-alt"></i> Share
                              </button>
                              <div id="share" className="collapse  width">
                                  <ul>
                                      <li><a style={{display: "table-cell"}} href="https://www.facebook.com/LetsTangoME" target="_blank"><img src="/images/share1.png" alt=""/></a></li>
                                      <li><a style={{display: "table-cell"}} href="https://twitter.com/LetsTangoME" target="_blank"> <img src="/images/share2.png" alt=""/></a></li>
                                      <li><a style={{display: "table-cell"}} href="https://www.instagram.com/letstangome/" target="_blank"><img src="/images/share3.png" alt=""/></a></li>
                                  </ul>
                              </div>
                              <button role="button" className="blog-read-buttton">
                              <i className="fa fa-rss"></i> Read Blogs
                              </button>
                          </div>
                      </div>
                      <div className="clearfix"></div>
                  </div>
              </div>
              <div className="col-md-4 col-12">
                  <div className="cartbutton-block">
                      {(this.props.is_in_stock)== "true" ?(
                      <div id="productInstock">
                          <span className="stock-status">In Stock</span>
                          <div className="cartbutton-container">
                              <button role="button" className="cartbutton">
                              Add to cart
                              </button>
                              <div className="clearfix"></div>
                          </div>
                          <div className="buynow-container">
                              <button role="button" className="buynowbutton">
                              Buy now
                              </button>
                              <div className="clearfix"></div>
                          </div>
                      </div>
                      ):(
                      <div id="productInstock">
                          <span className="stock-status-nul">Sold Out</span>
                          <div className="form-group product-notification">
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email to get update"/>
                              <div className="clearfix"></div>
                          </div>
                          <div className="product-notification-container">
                              <button role="button" className="product-notification-button">
                              Notify me
                              </button>
                              <small id="emailHelp" className="form-text text-muted">Submilt mail ID to get notify once the product back in stock.</small>
                              <div className="clearfix"></div>
                          </div>
                      </div>
                      )}
                      <div className="payment-option-container">
                          <ul>
                              <li><img src="/images/pay1.png"/></li>
                              <li><img src="/images/pay2.png"/></li>
                              <li><img src="/images/pay3.png"/></li>
                              <li><img src="/images/pay4.png"/></li>
                              <li><img src="/images/pay5.png"/></li>
                              <li><img src="/images/pay6.png"/></li>
                          </ul>
                          <div className="clearfix"></div>
                      </div>

                      <LoyaltyPrograms loyalty={this.props}/>
                      <span className="delivery-info">
                      <img src="/images/delivery-van.jpg" alt="" /> Available for free delivey
                      </span>
                      <div className="clearfix"></div>
                  </div>
                  <div className="static-product-info-block">
                      <div className="media">
                          <img className="align-self-center mr-3" src="/images/delivery-info.jpg" alt=""/>
                          <div className="media-body">
                              <h5 className="mt-0">Free delivery</h5>
                              <p>For AED 200 ad above (Excl Vat)</p>
                          </div>
                      </div>
                      <div className="clearfix"></div>
                  </div>
                  <div className="static-product-info-block">
                      <div className="media">
                          <img className="align-self-center mr-3" src="/images/pay-info.jpg" alt=""/>
                          <div className="media-body">
                              <h5 className="mt-0">Pay your way</h5>
                              <p>Cash On Delivery,Credit Card & more</p>
                          </div>
                      </div>
                      <div className="clearfix"></div>
                  </div>
                  <div className="static-product-info-block">
                      <div className="media">
                          <img className="align-self-center mr-3" src="/images/genuine-info.jpg" alt=""/>
                          <div className="media-body">
                              <h5 className="mt-0">100% Genuine</h5>
                              <p>Vendor sourced & brand new</p>
                          </div>
                      </div>
                      <div className="clearfix"></div>
                  </div>
              </div>
          </div>
         
      </div>
    	);
    }
  }
export default ProductContents;