import React, { Component } from "react";


class Header extends Component {


 constructor(props) {
    super(props);

    this.state = { term: "" };
  }


  render() {

    return (
    <header className="sticky-top" id="main-header">
    <div className="container">
        <div className="row">
            <div className="col-1 d-block d-sm-none menu-icon">
                <a href="#">
                    <img src="/images/Hamburger.png" srcSet="images/Hamburger.png 1x, images/Hamburger@2x.png 2x, images/Hamburger@3x.png 3x" alt="Let's Tango" />
                </a>
            </div>
            <div className="col-sm-2 col-8 brand">
                <a href="index.html">
                    <img alt="" src="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png" srcSet="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png 1x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-2x.png 2x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
                </a>
            </div>
            <div className="col-sm-5 col-12">
                <div className="input-group">
                    <input className="form-control border-secondary py-2" 
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)}
                      type="search" placeholder="search"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">
                        <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-5 top-navigation d-none d-sm-block">
                <nav className="navbar navbar-expand-sm  navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown d-none d-sm-block">
                          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                           <span className="flag-icon flag-icon-ae"></span> AED
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-us"></span> USD</a>
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-eu"></span> EU</a>
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-sa"></span> SAR</a>
                            
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-bh"></span> BHD</a>
                            
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-om"></span> OMR</a>
                            
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-kw"></span> KWD</a>
                            
                          </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MY ACCOUNT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TRACK ORDER</a>
                        </li>
                        <li className="nav-item cart">
                            <a className="nav-link" href="#"><img src="/images/buy.png"/></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>);
  }

 onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  
}
export default Header;