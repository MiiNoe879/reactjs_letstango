import React, { Component } from "react";

class Mobile extends Component {

  render() {

 
    const banners = this.props.banners;
    const block = this.props.block;
    const products = this.props.products;

    return (
        <section id="smartphone_block">
    
        {products ? (

        <div className="container">
            <div className="row">
                {banners.items.map((item, index) => 
                    <div key={index} className="hero-banner-block">
                        <a href={item.url}>
                            <img src={item.image} alt={item.title}/>
                        </a>
                    </div>
                )}

                <div id="home-head">
                    <h1><span>{block.label}</span><a href="#" className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a></h1></div>

                
                {block.items.map((item, index) => 
                    <div key={item.title} className="dealblock_thump col-md-6 big_thump">
                        <a href={item.url}>
                            <img  src={item.image} alt={item.title}/>
                                <h1>{item.title}</h1>
                                
                                {item.offer ? (
                                    <p>
                                        <span className="oldprice">{item.price.AED.old_price_formated}</span> 
                                        <span className="percentage">{item.offer}</span>
                                    </p>
                                ) : (
                                    <p>
                                        <span className="no-offer">&nbsp;</span>
                                    </p>
                                )}
                            <h2>{item.price.AED.default_formated}</h2>
                        </a>
                     </div>
                )}


            
            <div className="col-md-6 smallthump">
                <div className="row ">

                    {products.items.map((item, index) => 
                        <div key={item.title+index} className="col-6">
                            <a href={item.url}>
                                <div className="dealblock_thump botm_pad">
                                    <img  src={item.image} alt=""/>
                                    <h1>{item.title}</h1>
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
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
    ) : (<div></div>
    )}
    <div className="clearfix"></div>
</section>);
  }
}
export default Mobile;