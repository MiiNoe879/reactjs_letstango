import React, { Component } from "react";

import ProductReview from "./productreview"


class ProductSpecs extends Component {

  constructor(){
    super();
  this.onPageChange = this.onPageChange.bind(this);



  }
  onPageChange(event) {

    const targetId  = event.target.id;
    const newVlue = targetId.replace("#", '')
    console.log(newVlue)
    const container = document.getElementById(newVlue)
    smoothScroll(container)

  }


  render() {


    const specs = this.props.specification
    const specsArray = []
    
    for (var key in specs) {
    if (specs.hasOwnProperty(key)) {
      var val = specs[key];

      specsArray.push(val)

      }
    }

  
    let specsRightArry=specsArray.filter(a=>specsArray.indexOf(a)%2===1);
    let specsLeftArray=specsArray.filter(a=>specsArray.indexOf(a)%2===0);

     const review = this.props.review? JSON.parse(this.props.review):''

    return (

     <div id="spec-block">
   
          <div className="spec-tittles">
              <div className="btn-group-toggle" data-toggle="buttons">
               
                  <label id="overview#" onClick={this.onPageChange} className="btn btn-secondary active">
                    <input type="radio"  name="options" id="option1" autoComplete="off"  defaultChecked={true}/> Overview
                  </label>

                  <label  id="specification#" onClick={this.onPageChange} className="btn btn-secondary">
                    <input type="radio"  name="options"  id="option2" autoComplete="off" defaultChecked={false} /> Specification
                  </label>

                  {review.score !=null &&

                  <label  id="review#" onClick={this.onPageChange} className="btn btn-secondary" >
                    <input type="radio"   name="options"  id="option3" autoComplete="off" defaultChecked={false}/> Review
                  </label>
                }
         
                
            </div>
 
          </div>

        <div id="overview" className="overview">
          <div id="collapseSummary3" className="overview-box align-items-center collapse">
            <div className="row">
              <div className="col-md-7">
                <span dangerouslySetInnerHTML={{__html: this.props.description}}></span>
              </div>
            <div className="col-md-5">
              <h3>HIGHLIGHTS</h3>
                <span dangerouslySetInnerHTML={{__html: this.props.short_description}}></span>
            </div>

            </div>
              <div className="clearfix"></div>
            </div>
        <div className="row">
          <a className="collapsed showlink" data-toggle="collapse" href="#collapseSummary3" aria-expanded="false" aria-controls="collapseSummary"></a>
        </div>  
        
        <div className="clearfix"></div>
      </div>
      

        <div id="specification" className="specification">
          <div className="row">
            <div className="col-md-12 tille">
              <h3>Specifications</h3>
            </div>
          </div>

        <div id="spec-wrap" className="spec-wrap"> 
            <div id="collapseSummary" className="specification-box align-items-center collapse">
              <div className="row">
                <div className="col-md-6 col-12">
                  <ul>
                    {specsLeftArray.map((item,index) =>
                        <li key={index}>
                          <span className="left-tittles">{item.label}</span>
                          <span className="right-details crop-text-2">{item.value}</span>
                          <span className="clearfix"></span>
                        </li>
                      )}
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                   <ul>
                    {specsRightArry.map((item,index) =>
                      <li key={index}>
                        <span className="left-tittles">{item.label}</span>
                        <span className="right-details crop-text-2">{item.value}</span>
                        <span className="clearfix"></span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
        
        
            <div className="row">
              <a className="collapsed showlink" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
            </div>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
      </div>    
   
      <ProductReview review = {this.props.review}/>



   </div>

    )
  }
}
export default ProductSpecs;