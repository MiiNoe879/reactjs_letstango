import React, { Component } from "react";
import { connect } from "react-redux";
import Blog from "../common/blog";
import MainBanner from "./mainbanners";
import DealZone from "./dealzone";
import Mobile from "./mobile";
import Laptop from "./laptop";
import Electronics from "./electronics";
import Photography from "./photography";
import Gaming from "./gaming";
import Fashion from "./fashion";
import ReactPlaceholder from 'react-placeholder';

class HomeContent extends Component {

  constructor(props){
    super(props);
    }

render() {
	  
    return (
     
      <div>

          <MainBanner/>
            {this.props.dealzone ?(
              <div>
                <DealZone { ...this.props.dealzone} />
                <Mobile { ...this.props.mobile} />
                <Laptop { ...this.props.laptop} />
                <Electronics { ...this.props.electronics} />
                <Photography { ...this.props.photography} />
                <Gaming { ...this.props.gaming} />
                <Fashion { ...this.props.fashion} />
                <Blog />
              </div>
            ): ( <ReactPlaceholder delay={1000} ready={false} color='#E0E0E0' rows={7} showLoadingAnimation={true}>
              </ReactPlaceholder>
            ) }
      
        <div className="clearfix"></div>
      </div>

    );
  }
}

export default (HomeContent);