import React, { Component } from "react";


class ProductImages extends Component {

  constructor(){
    super();


  }
  render() {
  	

  		if (this.props.mainImage!=null) {
  			this.props.images.push(this.props.mainImage)
  		}

	return (
		<div className="col-md-4 col-12 text-center"  id="slider">
			
			{this.props.images ?(
		    	<div id="myCarousel" className="carousel slide">
		      		<div className="carousel-inner">  
               			{this.props.images.map((item, index) => 
                    		
                    		<div key= {index} className= {index ? ("item carousel-item") : ("active item carousel-item")} data-slide-number={index}>
                        	<img src={item} className="img-fluid"/>
                        	</div>
                  
                		)}
              		
	              		<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
			            	<span className="carousel-control-prev-icon"></span>
			            </a>
			            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
			            	<span className="carousel-control-next-icon"></span>
			            </a>
		       	 	</div>
		 
		         
		        	<ul className="carousel-indicators list-inline ">
						{this.props.images.map((item, index) => 

							<li key= {index+"classname"} className= {index ? ("list-inline-item") : ("list-inline-item active")}>
		                		<a id={index} className="selected" data-slide-to={index} data-target="#myCarousel">
		                			<img src={item} className="img-fluid"/>
		                		</a>
		            		</li>

						)}	

		        	</ul>
		    	</div>
		    ):(<div></div>)}
		</div>
	)
  }
}
export default ProductImages;