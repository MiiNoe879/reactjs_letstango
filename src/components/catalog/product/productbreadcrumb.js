import React, { Component } from "react";


class ProductBreadCrumb extends Component {

  constructor(){
    super();


  }
  render() {

    return (
    	<div className="col-12 bread-crumps">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Television</a></li>
                <li>Samsung</li>
            </ul>
        </div>
        )
    }
}
export default ProductBreadCrumb;