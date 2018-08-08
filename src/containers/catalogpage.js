import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCatalogContent } from "../actions/catalog";
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import Category from "../components/catalog/category";
import Product from "../components/catalog/product";



class Catalogpage extends Component {

  componentDidMount() {
    this.props.fetchCatalogContent(this.props.location.pathname);
  }
  render() {
    
    return (
      <div>
          <Header />
          <MobileIconMenu />
          <Menu />

          { this.props.catalog ? (
            <div>
              {(() => {
                switch (this.props.catalog.type) {
                  case "category":   
                      return <Category { ...this.props.catalog }/>;;
                  case "product":   
                      return <Product { ...this.props.catalog} />;
                  default:      
                      return null;
                }
              })()}

            </div>         
          ): (<div></div>) }

          

          <Footer />
        <div className="clearfix"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { catalog: state.catalog };
}

export default connect(mapStateToProps, { fetchCatalogContent })(Catalogpage);