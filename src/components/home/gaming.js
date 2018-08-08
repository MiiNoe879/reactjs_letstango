import React, { Component } from "react";

class Gaming extends Component {

  render() {
    const products = this.props.products;
    return (<section id="gaming_block">
    {products ? (
    
    <div className="container">
        <div className="row">
            <div className="col-12 tittle_section">
                <h1 className="blocktittle" >{products.label}</h1>
                <a href="#" className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a>
            </div>
        </div>
        <div className="row">
            {products.items.map((item, index) => 
                <div  key={index} className="col-md-3">
                        
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
        </div>
    </div>) : (<span></span>)
  }
    <div className="clearfix"></div>
</section>);
  }
}
export default Gaming;