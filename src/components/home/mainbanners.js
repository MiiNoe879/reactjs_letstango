import React, { Component } from "react";


class MainBanners extends Component {

    constructor(props){
      super(props);

     let user = localStorage.getItem('user')?(localStorage.getItem('user')):'';
    console.log(user)


  }




  render() {

    const mainbanners = this.props.items;

    return (
    <section id="hero-slider">


        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        
  
          <ul className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ul>
          
        
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="https://www.letstango.com/promotions/under-19-deals">
                <img src="https://www.letstango.com/media/wysiwyg/under19sale-min.jpg" alt="Los Angeles"/>
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.letstango.com/promotions/under-19-deals">
                <img src="https://www.letstango.com/media/wysiwyg/hero-banner-july-canon-min.jpg" alt="Chicago"/>
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.letstango.com/promotions/under-19-deals">
                <img src="https://www.letstango.com/media/wysiwyg/hero-banner-july-mavic-min.jpg" alt="New York"/>
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.letstango.com/promotions/under-19-deals">
                <img src="https://www.letstango.com/media/wysiwyg/hero-banner-july-kenwood-min.jpg" alt="New York"/>
              </a>
            </div>
          </div>
          
    
          <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>


<div className="clearfix"></div>
</section>);
  }
}
export default MainBanners;