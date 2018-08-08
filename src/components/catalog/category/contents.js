import React, { Component } from "react";
import {connect} from "react-redux";
import Pagination from './pagination';
import {fetchCategory} from "../../../actions/catalog";

class Contents extends Component {

  constructor(){
    super();
  }

  openNavigation(type){
    console.log(type)
    openNav(type)
  }
  closeNavigation(type){
    
  closeNav(type)

  }

  applySort(text){

  console.log(text)

  this.props.fetchCategory(this.props.category_id,this.props.currentpage,"","",this.props.selected_filters);

  }


  render() {

    const items = this.props.items; 

    return (

      <div className="col-12 col-md-9 col-lg-10 right-category_body">

      {items ? (

      	<div >
            
            <div id="tille-block" className="row align-items-center">
                <div className="col-12">

                    <h1 className="tittle"><span className="mobright">{this.props.nitems} results for</span> <span className="mobleft">{this.props.category_name}</span></h1>
                  
                      <div className="btn-group filterbuttons-mobile" role="group" aria-label="Basic example">
                        <button type="button" onClick={this.openNavigation.bind(this,"filter")}  className="btn btn-outline-secondary">Filter <i className="fa fa-filter"></i> </button>
                        
                        <button type="button" onClick={this.openNavigation.bind(this,"sort")} className="btn btn-outline-secondary">Sort by <i className="fa fa-sort-amount-desc"></i> </button>
                      </div> 
                      <div className="dropdown pull-right sortoption-desktop">
                  
                        <div className="btn-group">
                        <button className="btn dropdown-toggle"  name="recordinput" data-toggle="dropdown">
                          Newest
                          <span className="caret"></span>
                        </button>

                        <ul className="dropdown-menu">
                            <li><a onClick={this.applySort.bind(this,"text")} href="#">Newest</a></li>
                            <li><a href="#">Relevance</a></li>
                            <li><a href="#">High to Low</a></li>
                            <li><a href="#">Low to High</a></li>
                        </ul>
                        </div>
        
                        <div className="clearfix"></div>
                      </div>


                       <div id="sortby-mob"  className="col-12 col-sm-2  sortby-mob">
                      
                        <div className="close-button">
                          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNavigation.bind(this,"sort")}>&times;</a>
                        </div>
                        

                         <div className="sortgroup"> 
                         
            
                         
                         <div className="options">
                                <label title="item1">
                                    <input type="radio" checked="checked" name="foo" value="0" /> 
                                      Popularity
                                    <img />
                                </label>
                                <label title="item2">
                                    <input type="radio" name="foo" value="1" />
                                      Price low to high
                                    <img />
                                </label>   
                                <label title="item3">
                                    <input type="radio" name="foo" value="2" />
                                      Price hight to low
                                    <img />
                                </label>
                           </div>
                              
                               
                         <div className="clearfix"></div>
                         </div>  






                     </div>
                 </div>
              </div>

              { items ? (
                  <div className="row">
                  {items.map((item, index) => 
                    
                    <div className="col-md-3 col-lg-2 col-6 end" key={index}>
                        
                      <a href={item.url}>

                        <div className="dealblock_thump">
                            <div className="thump_img">
                              <img src={item.main_image} alt={item.name}/>
                            </div>
                              <h1 className="crop-text-2">{item.name}</h1>
                           {item.offer ? (
                            <p>
                                <span className="oldprice">{item.price.AED[0].default_original_formated}</span> 
                                <span className="percentage">{item.offer}</span>
                            </p>
                        ):(
                            <p>
                                <span className="no-offer">&nbsp;</span>
                            </p>
                            )
                        }
                        <h2>{item.price.AED[0].default_formated}</h2>
                      </div>

                    </a>

                  </div> 
                  )}
                  
                  <Pagination className = ""
                    categoryid={this.props.category_id}
                    totalpages={this.props.npages}
                    currentpage={this.props.currentpage}
                    selectedfilters={this.props.selected_filters}
                    margin={1}/>
                
             </div>

            ): (<div></div>) }

            <div className="clearfix"></div>
          </div>
        ):(<div></div>)}

        </div>
    	);
    }
  }
export default connect(null,{ fetchCategory }) (Contents);