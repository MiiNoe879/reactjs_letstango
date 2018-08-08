import React, { Component } from "react";

class ProductBlock extends Component {

  render() {

  	const productBlock = this.props.items;
    return (
    <section id="home-dealblock">
    	{productBlock ? (
		<div className="container">
	    	<div  className="row ">
	        	<div id="home-head">
	            	<h1><span>{this.props.label}</span><a href="#" className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a></h1>
	            </div>
	        	<div id="dealblock_home" className="col-md-6 dealblock countdown-wrapper">
	            	<div className="img-container ">
	                    <img src={this.props.items[0].image} alt=""/>
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
	            </div>
	            {this.props.items.slice(1,this.props.items.length).map((item, index) => 
	            	<div className="col-md-2 col-6">
		            	<div className="dealblock_thump">
		                    <img src={item.image} alt={item.title}/>
		                    <h1>{item.title}</h1>
		                    {item.offer ? (<p>
		                    	<span className="oldprice">{item.price.AED.old_price_formated}</span> 
		                    	<span className="percentage">{item.offer}</span>
		                    </p>
		                    ) : (<span></span>)}
		                    <h2>{item.price.AED.default_formated}</h2>
		                </div>
		            </div>
            	)}
	        </div>
	    </div>
	) : (<span>Loading</span>
	)};
	</section>
	);
  }
}
export default ProductBlock;