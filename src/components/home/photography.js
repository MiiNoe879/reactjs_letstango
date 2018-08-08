import React, { Component } from "react";

class Photography extends Component {

  render() {
    const products = this.props.products;
    const banners = this.props.banners;

    return (<section id="camera_block">
    <div className="container">
        <div className="row">
        
        { banners ? (
            <div className="hero-banner-block">
                <a href={banners.url}>
                    <img src={banners.label} alt=""/>
                </a>
            </div>
          

            ) : (<div></div>) }
        </div>
        

        {products ? (
        
        <div className="row">
            <div id="home-head">
                <h1><span>{products.label}</span><a href="#" className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a></h1>
            </div>
            {products.items.map((item, index) => 
              <div key={index} className="col-md-2">
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
                        ):(
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
</section>);
  }
}
export default Photography;