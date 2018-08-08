import React, { Component } from "react";


class RelatedProduct extends Component {

  constructor(){
    super();
  

  }

  render() {

    const relatedProduct = this.props.relatedproduct
  	  return (


 		<div id="related-product-slider">

            {(relatedProduct!=null)&&(relatedProduct.length > 0) ? (
            <div className="row">
            	<div className="col-12 tille">
                	<h3>You Might Also Like</h3>
                </div>

                { relatedProduct.map((item, index) =>
                
                        <div className="col-md-2 col-6" key= {index}>
                            <a href={item.url}>
                                <div className="dealblock_thump">
                                        <div className="thump_img">
                                            <img src={item.main_image} alt={item.title}/>
                                        </div>
                                        <h1 className="crop-text-2">{item.title}</h1>
                                    {item.offer ? (
                                        <p>
                                            <span className="oldprice">{item.price.AED[0].default_original_formated}</span> 
                                            <span className="percentage">{item.offer}</span>
                                        </p>
                                    ):(
                                        <p>
                                        <span className="no-offer">&nbsp;</span>
                                        </p>
                                    )}
                                    <h2>{item.price.AED[0].default_formated}</h2>
                                </div>
                            </a>
                        </div>
  
                )}
        
                <div id="viewall-mobile-btn" className="col-12">
                    <a href="#" className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
                </div>
                    
            </div>
          ) : ( <div></div> ) }
            
        
    <div className="clearfix"></div>
    </div>

  	)
   }
  }
export default RelatedProduct;