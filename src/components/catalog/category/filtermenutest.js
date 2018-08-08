import React, { Component } from "react";
import { connect } from "react-redux";
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

import {fetchCategory} from "../../../actions/catalog";



class FilterMenu extends Component {

    constructor(props){
        super(props);
        this.state = { 
            min: 0,
            max: 100,
            minValue:'',
            maxValue:'',
            searchTerm: '', 
            data: this.props,
            checkedBoxes: [],
            initialFilterfilters : this.props.filters,
            filter:this.props.filters,   
            manufacturer:this.props.filters.manufacturer?this.props.filters.manufacturer.items:'',
            colorList: this.props.filters.color?this.props.filters.color.items:'',
            sizeList: this.props.filters.size?this.props.filters.size.items:'',
            categoryList: this.props.filters.category?this.props.filters.category.items:''

        }
        this.onInputChange      = this.onInputChange.bind(this);
        this.onCheckBoxSelected = this.onCheckBoxSelected.bind(this);
    
    }

    componentWillReceiveProps(newProps) {

        const  data =  newProps;
        const  initialFilterfilters = newProps.filters;
        const  filter = newProps.filters;
        const  manufacturer = newProps.filters.manufacturer?this.props.filters.manufacturer.items:'';
        const  colorList= newProps.filters.color?this.props.filters.color.items:'';
        const  sizeList=  newProps.filters.size?this.props.filters.size.items:'';
        const  categoryList= newProps.filters.category?this.props.filters.category.items:''

        this.setState({ data, initialFilterfilters,filter ,manufacturer, colorList,sizeList,categoryList});
    }



    onInputChange(event){
        
        let substr = event.target.value;
        event.preventDefault();

        {(() => {
            switch (event.target.id) {
                case "manufacturer":   
                    let manufacturer  = this.state.initialFilterfilters.manufacturer.items.filter(function(item){
                        return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
                    })
                    this.setState({ manufacturer });
                    break;

                case "color":
                    let colorList  = this.state.initialFilterfilters.color.items.filter(function(item){
                return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
                    })
                    this.setState({ colorList });
                     break;

                case "size":
                    let sizeList  = this.state.initialFilterfilters.size.items.filter(function(item){
                return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
                    })
                    this.setState({ sizeList });
                     break;

                case "category":
                    let categoryList  = this.state.initialFilterfilters.category.items.filter(function(item){
                return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
                    })
                    this.setState({ categoryList });
                     break;

                default: 
                    return null;
                }
        })()}
    }

/* CHECKBOX SELECTION*/

    handleCheckbox = (e, item,title) => {

        var data = {[title]: item.id};
        const checkedBoxes = [...this.state.checkedBoxes];
        if(e.target.checked) {
            checkedBoxes.push(data)
        } 
        else {
            var index = _.findIndex(checkedBoxes,data)
            if (index > -1) {
            checkedBoxes.splice(index, 1);
            }
        }
        this.setState({checkedBoxes});
            setTimeout(function() { //Start the timer
        this.onCheckBoxSelected() //After 1 second, set render to true
        }.bind(this), 100)

  }
/* UPDATE PRICE RANGE*/
    
    onSliderChange = (value) => {
            log(value);
          }
    onMinChange = (e) => {
            this.setState({
              min: +e.target.value || 0,
            });
          }
    onMaxChange = (e) => {
            this.setState({
              max: +e.target.value || 100,
            });
          }




/* MAKE FILTER ARRAY*/
  onCheckBoxSelected(){
    
    var selectedFilterArray = this.state.checkedBoxes
    var keysArray = []

 /* PARSE KEYS FORM SELECTED CHECK*/
    for(var index in selectedFilterArray){
        var key = index;
        var val = selectedFilterArray[index];
    for(var code in val){
        var selectedCode = code;
        var id = val[code];
        keysArray.push(selectedCode)
        }
    }

 /* REMOVE DUPLICATES FROM KEYSARRAY*/
    var filterCodeArray = [];
    $.each(keysArray, function(i, el){   
    if($.inArray(el, filterCodeArray) === -1) filterCodeArray.push(el); 
    });


/* MAKE FILTER DATA TO SEND*/
    var finalFilterArray = []
    for(var i in filterCodeArray){

        const value = _.map(selectedFilterArray,filterCodeArray[i]).join(",")
        finalFilterArray.push({
        [filterCodeArray[i]] : value.replace(/(^[,\s]+)|([,\s]+$)/g, ''),

        })  
    }
     /* CALL GET CATEGORY API */
    const categoryId = this.props.category_id
    const page = this.props.currentpage

    this.setState({finalFilterArray});

    this.props.fetchCategory(categoryId,page,this.state.minValue,this.state.maxValue,finalFilterArray)    
  
  }
  onSliderChange = (value) => {
    
    console.log(value);
    const categoryId = this.props.category_id
    const page = this.props.currentpage
    const minValue = value[0]
    const maxValue = value[1]

    this.setState({minValue,maxValue})

    this.props.fetchCategory(categoryId,page,minValue,maxValue,this.state.finalFilterArray)
    
        
  }
  closeNavigation(type){

    closeNav(type)

  }

    render() {
   
        const filters = this.state.filter;
        const filterOptions = Object.keys(filters).map(key =>   
        
        <option value={key}>{filters[key]}</option>);
        return (
            
            <div id="left_filter" className="col-12  col-lg-2 col-md-3  left_filter"> 


            <div className="close-button">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNavigation.bind(this,"filter")}>&times;</a>
            </div>


                <h2>PRICE RANGE</h2>
                <div>
                
                <Range 
                    defaultValue={[this.state.min, this.state.max]} 
                    min={this.state.min} 
                    max={this.state.max} 
                    tipFormatter={value => `${value}`}
                    onAfterChange={this.onSliderChange}/>
                
                </div>

                <div className="price-ragne-label">
                    <span className="pull-left">0</span>
                    <span className="pull-right">10000</span>
                </div>

            
                <div className="clearfix"></div>
                    {filterOptions.map((filter, index) => 
                    <span key= {index} >
                    <div className="filtergroup"> 
                        <h2>{filter.props.children.title}</h2>
                        
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                id={filter.props.children.code} 
                                placeholder="Search"
                                onChange={this.onInputChange}/>
                        </div>

                        {(() => {
                        
                        switch (filter.props.children.code) {
                            case "manufacturer":
                                return <span key= {filter.props.children.code + filter.props.children.code} >
                            
                                <div id={index} className="filteroptions_bllock collapse"> 
                     
                            {this.state.manufacturer.map((filteritem) =>
                                <div className="checkbox" key={filteritem.id+filteritem.title}>
                                    <label>
                                        <input type="checkbox"
                                        id={filteritem.id}
                                        checked={this.state.checkedBoxes.find((ch) => ch.id === filteritem.id)}
                                        onClick={(e) => this.handleCheckbox(e,filteritem,filter.props.children.code)} value={filteritem}/>
                                        <span className="cr"><i className="cr-icon fa fa-check"></i></span>
                                        {filteritem.title}
                                        </label>
                                    </div>
                                )}
                   
                            </div>
                            <a className="collapsed showlink" data-toggle="collapse" href={'#'+index} aria-expanded="false" aria-controls="collapseSummary"></a>
                            </span>


                        case "color":
                           return <div className="filteroptions_bllock" key= {index + filter.props.children.code}>
                            {this.state.colorList.map((filteritem) =>
                                <div className="checkbox" key={filteritem.id+filteritem.title}>
                                    <label>
                                        <input 
                                        type="checkbox" 
                                        id={filteritem.id}
                                        checked={this.state.checkedBoxes.find((ch) => ch.id === filteritem.id)}
                                        onClick={(e) => this.handleCheckbox(e,filteritem,filter.props.children.code)} value={filteritem}/>
                                        <span className="cr"><i className="cr-icon fa fa-check"></i></span>
                                        {filteritem.title}
                                        </label>
                                    </div>
                                )}
                            </div>
                            default:      
                                return <div></div>;
                            }
                    })()}  
                    </div>
                    </span>
                    )}



                <div className="apply-filter-container btn-group" role="group" >
                    <div className="col text-center">
                      <button type="button"  className="btn btn-outline-secondary">RESET  </button>
                    </div>
                    <div className="col text-center">
                      <button type="button" onClick={this.closeNavigation.bind(this,"filter")} className="btn btn-dark">APPLY  </button>
                    </div>   
                    <div className="clearfix"></div>   
                </div>






                <div className="clearfix"></div>
            </div>
        );
    }
}
function mapStateToProps(state) {
  return { filters: state.catalog.filters };
}
export default connect(mapStateToProps, { fetchCategory })(FilterMenu);
