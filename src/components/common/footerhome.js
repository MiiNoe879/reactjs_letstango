import React, { Component } from "react";

class Footer extends Component {

  render() {

    return (<footer>
    <section id="blog_block">
        <div className="container">
            <div className="row d-none d-sm-block ">
                <h1>
                    Online shopping UAE,<br/>
                    2018 Best deals and offers every hour. Shop Now
                </h1>
                <p>Letstango.com is the No.1 online shopping destination in UAE for electronics, smartphones, televisions, home appliances & gadgets. At letstango, we sell only genuine products and easy to return policy.We offer online shopping UAE with cash on delivery option. All users get 15 days free return and 100% refund back. Our online chat executives will assist you to pick the best products and help you to clear all the concerns before the purchase. We are one of the trusted members of Dubai Chamber of commerce.</p>
                <p>Online Shopping UAE is fun at letstango.com, You can earn rewards for all purchases and you can choose your preferred airline partners, We partnered with Air Arabia, Jet Airways & Airmiles to earn rewards points for every purchase. Every day we have online shopping deals and offers across all categories.
                </p>
            </div>
            <div id="service_block"  className="row  align-items-center">
                <div className="col-md-4 headblock d-none d-sm-block">
                    <h2>Tang<i className="fa fa-heart-o"></i> Promise</h2>
                    <p>The best online shopping experience</p>
                </div>
                <div className="col-md-2 col-6">
                    <img src="images/Genuine.png" alt=""/>
                    <p>100% Genuine</p>
                </div>
                <div className="col-md-2 col-6">
                    <img src="images/Quick_Delivery.png" alt=""/>
                    <p>Quick Delivery</p>
                </div>
                <div className="col-md-2 col-6">
                    <img src="images/15_Day_Returns.png" alt=""/>
                    <p>15 Day Returns</p>
                </div>
                <div className="col-md-2 col-6">
                    <img src="images/Worldwide_Shipping.png" alt=""/>
                    <p>Worldwide Shipping</p>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </section>
    <section id="footer_mddle_block">
        <div className="container">
            <div id="newsletter_footer" className="row align-items-center">
                <div className="col-md-3 col-12">
                    <h2>Never miss out</h2>
                    <p>Sign up and receive exclusive offers</p>
                </div>
                <div className="input-group mb-8 col-md-4 col-12">
                    <input type="text" className="form-control" placeholder="Enter mail ID" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn_newsletter" type="button">BE AWESOME</button>
                    </div>
                </div>
            </div>
            <div id="customer_service_footer" className="row align-items-center">
                <div className="col-md-4 col-12">
                    <h3>We’re always here to help</h3>
                    <p><span>Reach out to us through any of these support channels</span></p>
                </div>
                <div className="col">
                    <div className="media">
                          <img className="align-self-end mr-3" src="images/HELP_CENTRE.png"  srcSet="images/HELP_CENTRE.png 1x, images/HELP_CENTRE@2x.png 2x, images/HELP_CENTRE3x.png 3x" alt="" />
                          <div className="media-body">
                            <h5 className="mt-0">HELP CENTRE</h5>
                            <p>letstango.com</p>
                          </div>
                        </div>
                </div>
                
                <div className="col">
                    <div className="media">
                          <img className="align-self-end mr-3" src="images/EMAIL_SUPPORT.png"  srcSet="images/EMAIL_SUPPORT.png 1x, images/EMAIL_SUPPORT@2x.png 2x, images/EMAIL_SUPPORT3x.png 3x" alt="" />
                         
                          <div className="media-body">
                            <h5 className="mt-0">Email Support</h5>
                            <p>team@letstango.com</p>
                          </div>
                        </div>
                </div>
                
                <div className="col">
                    <div className="media">
                          <img className="align-self-end mr-3" src="images/PHONE_SUPPORT.png" srcSet="images/PHONE_SUPPORT.png 1x, images/PHONE_SUPPORT@2x.png 2x, images/PHONE_SUPPORT3x.png 3x" alt="" />
                          <div className="media-body">
                            <h5 className="mt-0">Phone support</h5>
                            <p>+971-4-3388225</p>
                          </div>
                        </div>
                </div>
            </div>
            <div id="navigation_footer" className="row ">
                <div className="col-sm-3">
                    <ul className="ft-links">
                        <li className="foot-nav-head">LETSTANGO</li>
                        <li><a href="/about-us/">The LetsTango.com Story</a></li>
                        <li><a href="/why-letstango/">Why LetsTango.com</a></li>
                        <li><a href="/air-rewards">Air Rewards</a></li>
                        <li><a href="/jp-miles">JetPrivilege</a></li>
                        <li><a href="/airmiles">Air Miles</a></li>
                        <li><a href="/careers">Career </a></li>
                        <li><a href="https://www.letstango.com/marketplace/marketplaceaccount/myproductslist/">Seller Dashboard</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="ft-links">
                        <li className="foot-nav-head">LET US HELP YOU</li>
                        <li><a href="/contact-us">Contact Us</a></li>
                        <li><a href="/extended-warranty">Extended Warranty</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/buyer-protection">Buyers Protection</a></li>
                        <li><a href="/shipping-and-returns">Shipping &amp; return</a></li>
                        <li><a href="/safe-shopping-guarantee">Safe &amp; Secure Shopping</a></li>
                        <li><a href="/terms">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="ft-links">
                        <li className="foot-nav-head">POPULAR CATEGORIES</li>
                        <li><a href="/mobiles-tablets/mobiles">Smartphone</a></li>
                        <li><a href="/electronics/television">Television</a></li>
                        <li><a href="/gadgets">Gadgets</a></li>
                        <li><a href="/gaming">Gaming</a></li>
                        <li><a href="/photography">Photography</a></li>
                        <li><a href="/electronics/laptops"> Laptops</a></li>
                        <li><a href="/gadgets/wearables">Smart watches</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="ft-links">
                        <li className="foot-nav-head">&nbsp;</li>
                        <li><a href="/fashion-beauty/for-men/eyewear">Sunglasses</a></li>
                        <li><a href="/fashion-beauty/for-woman">Womens Fashion</a></li>
                        <li><a href="/fashion-beauty/for-men/clothing">Mens Clothing</a></li>
                        <li><a href="/home-outdoors">Home Appliances</a></li>
                        <li><a href="/baby-kids/baby-essentials">Baby Essentials</a></li>
                        <li><a href="/baby-kids/toys">Toys</a></li>
                        <li><a href="/sports-fitness">Sports &amp; Fitness</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </section>
    <section id="footer_bottom_block">
        <div className="container ">
            <div className="row ">
                <div className="col-sm-2 lt-afl">
                    <a  href="/dxb-chamber-certificate" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/ft-afl-1.jpg"/>
                    </a>
                </div>
                <div className="col-sm-2 lt-afl">
                    <img src="https://www.letstango.com/media/wysiwyg/ft-afl-3.jpg"/>
                </div>
                <div className="col-sm-2 lt-afl">
                    <a   href="/airmiles" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/ft-afl-4.jpg"/>
                    </a>
                </div>
                <div className="col-sm-2 lt-afl">
                    <a  href="/jp-miles" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/ft-afl-5.jpg"/>
                    </a>
                </div>
                <div className="col-sm-2 lt-afl">
                    <a   href="/air-rewards" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/footer-arireward.jpg"/>
                    </a>
                </div>
                <div className="col-sm-2 lt-afl">
                    <a  href="https://global.letstango.com/" rel="noopener" target="_blank"><img src="https://www.letstango.com/media/wysiwyg/ft-afl-6.jpg"/></a>
                </div>
            </div>
            <div id="app-store-footer" className="row">
                <div className="col-12 text-center">
                    <h2>SHOP ON THE GO</h2>
                    <a href="https://itunes.apple.com/in/app/letstango.com/id1018634851?mt=8" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/aps.png"/>
                    </a><a href="https://play.google.com/store/apps/details?id=com.letstango.mobile&amp;hl=en" target="_blank">
                    <img src="https://www.letstango.com/media/wysiwyg/aps2.png"/>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer_bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <ul>
                            <li>
                                <img src="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png" srcSet="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png 1x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-2x.png 2x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com"/>
                            </li>
                            <li> <img  src="images/facebook.png" alt=""/></li>
                            <li> <img  src="images/twitter.png" alt=""/></li>
                            <li> <img  src="images/instagram.png" alt=""/></li>
                        </ul>
                    </div>
                    <div className="col-md-6 copyright">
                        <p>© Copyright 2018 LetsTango.com. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </section>
    <div className="clearfix"></div>
</footer>);
  }
}
export default Footer;