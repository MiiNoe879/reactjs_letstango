import React, { Component } from "react";

class Laptop extends Component {

  render() {
    const products = this.props.products;
    const banners = this.props.banners;

    return (<section id="laptop_block">
        <div className="container">

            {banners ? (

                <div id="banner-section" className="row">
                    <div className="hero-banner-block">
                        <a href="#">
                            <img  src="images/lap-banner.jpg" alt=""/>
                        </a>
                    </div>

                    {banners.items.map((item, index) => 
                    <div key={index} className="col-md-6 first">
                        <a href={item.url}>
                            <img src={item.image} alt=""/>
                        </a>
                    </div>
                
                    )}
                </div>
            ) : (<span></span>
            )}
    

            {products ? (
                    <div className="row">
                        <div id="home-head">
                            <h1><span>{products.label}</span><a href="#" className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a></h1>
                        </div>
                        {products.items.map((item, index) => 
                            <div key={item.image} className="col-md-3">
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
                    ) : (<span></span>)
                  }

        </div>
        <div className="clearfix"></div>
        </section>
        
    );}
}
export default Laptop;