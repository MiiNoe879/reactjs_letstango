import React, { Component } from "react";


class DealZone extends Component {

  render() {

  	const products = this.props.products;  	
    return (
    <section id="home-dealblock">
    	{products ? (
		<div className="container">
	    	<div  className="row ">
	        	<div id="home-head">
	            	<h1>
		            	<span>{this.props.block.label}</span><a href="#" className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a>
	            	</h1>
	            </div>

	        	<div id="dealblock_home" className="col-md-6 dealblock countdown-wrapper" >
		        	<a href={this.props.block.items[0].url}>
		            	<div className="img-container "> 
		                    <img src={this.props.block.items[0].image} alt="" />
		                </div>
		                <div className="card ">
		                    <h2 className="align-middle">Dont Miss Out! <br/> Ends in</h2>
		                    <div className="card-block">
		    	                <div id="countdown">
		            	            <div className="well">
		                        	    <span id="hour" className="timer "></span>
		                                <span className="timer ">:</span>
		                        	    <span id="min" className="timer "></span>
		                                <span className="timer ">:</span>
		                        	    <span id="sec" className="timer "></span>
		                        	</div>
		                    	</div>
		                    </div>
		                </div>
		            </a>
	            </div>
	            {products.items.map((item, index) => 
	            	<div key={index} className="col-md-2 col-6">
	            		<a href={item.url}>
			            	<div className="dealblock_thump">
			                    <div className="thump_img">
			                    	<img src={item.image} alt={item.title}/>
		                    	</div>
			                    <h1 className="crop-text-2">{item.title}</h1>
			                    {item.offer ? (
	                                <p>
	                                    <span className="oldprice">{item.price.AED.old_price_formated}</span> 
	                                    <span className="percentage">{item.offer}</span>
	                                </p>
	                                ) : (
	                                <p>
	                                    <span className="no-offer">&nbsp;</span>
	                                </p>
	                                )
	                            }
			                    <h2>{item.price.AED.default_formated}</h2>
			                </div>
			            </a>
		            </div>
            	)}
            	<div id="viewall-mobile-btn" className="col-12">
               		<a href="#" className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
               </div>
	        </div>
	    </div>
	) : (<span></span>
	)}
	</section>
	);
  }

}
export default DealZone;