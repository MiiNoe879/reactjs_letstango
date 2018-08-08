import React, { Component } from "react";

class Electronics extends Component {

  render() {

     const banners = this.props.banners;
     const block= this.props.block;
     const products= this.props.products;

    return (<section id="electronic_block">
    <div className="container">

    {products ? (

        <div className="row">
            { block ? (
            
                <div className="dealblock_thump col-md-6 big_thump">
                    <a href={block.items[0].url}>
                        <div className="thump_img">
                            
                                <img  src={block.items[0].image} alt=""/>
                            
                        </div>
                            <h1 className="crop-text-2">{block.items[0].title}</h1>
                                {block.items[0].offer ? (
                                    <p>
                                        <span className="oldprice">{block.items[0].price.AED.old_price_formated}</span> 
                                        <span className="percentage">{block.items[0].offer}</span>
                                    </p>
                                    ) : (
                                    <p>
                                        <span className="no-offer">&nbsp;</span>
                                    </p>
                                )}

                        <h2>{block.items[0].price.AED.default_formated}</h2>
                        <h2>{block.items[0].price.AED.default_formated}</h2>
                    </a>
                </div>
                  
         
            ) : (<div></div>) }


            <div className="col-md-6 smallthump">
                <div className="row">
                    <div className="col-12 tittle_section">
                        <h1 className="blocktittle" > Electronics</h1>
                        <a href="#" className="pull-right viewall_home">VIEW ALL <i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <div className="row ">
                {products.items.map((item, index) => 
                    <div key={index} className="col-md-4 col-6 botm_pad">
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
            </div>
        </div>
    ) : (<span></span>
    )}
    </div>

    <div className="clearfix"></div>
</section>);
  }
}
export default Electronics;