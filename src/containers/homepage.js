import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHomepage } from "../actions/homepage";

import Footer from "../components/common/footerhome";
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import HomeContent from "../components/home/homecontent";


class Homepage extends Component {

  componentDidMount() {
    this.props.fetchHomepage();
    
  }
  render() {
    return (
      <div>
          <Header />
          <MobileIconMenu />
          <Menu />
          <HomeContent {...this.props.homepage}/>
          <Footer />
        <div className="clearfix"></div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { homepage: state.homepage };
}

export default connect(mapStateToProps, { fetchHomepage })(Homepage);