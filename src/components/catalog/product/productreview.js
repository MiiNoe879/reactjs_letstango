
import React, { Component } from "react";


class ProductReview extends Component {

  constructor(){
    super();


}
render() {


    const review = this.props.review ? JSON.parse(this.props.review):''
    var totalReviews ,fiveRating,fourRating,threeRating,twoRating,oneRating
   
     
     if( review.score !=null){

         totalReviews = review.pro_review_count+review.user_review_count
         fiveRating = review.pro_score_dist_all[4]+review.user_score_dist_all[4]
         fourRating = review.pro_score_dist_all[3]+review.user_score_dist_all[3]
         threeRating = review.pro_score_dist_all[2]+review.user_score_dist_all[2]
         twoRating = review.pro_score_dist_all[1]+review.user_score_dist_all[1]
         oneRating = review.pro_score_dist_all[0]+review.user_score_dist_all[0]

    }
   return (

        <div className = "review-container">
            {review.score ? (
                <div>
                    <div id="review" className="specification">
                        <div className="row">
                            <div className="col-md-12 tille">
                                <h3>Reviews</h3>
                            </div>
                        </div>
                        <div id="rew-wrap" className="spec-wrap"> 
                            <div id="collapseSummary2" className="review-box align-items-center collapse">
                                <div id="review-titlle-block" className="row">
                                    <div className="col-md-2 col-12 text-center">
                                        <h5>OVERALL RATING</h5>
                                        
                                        <span className="rate-percentage">{review.score/2}</span>
                                        <div className="rating-wraper">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <span className="rate-number">out of {totalReviews} reviews</span>

                                    </div>
                                <div className="col-md-6 col-12">
                                    <div className="pull-left rate-block">
                                        <div className="pull-left rating" >
                                            <div className="star-rate" ><span className="fa fa-star"></span> 5 </div>
                                        </div>
                                        <div className="pull-left rate-bar">
                                            <div className="progress">
                                                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style={{width: (totalReviews/fiveRating)+'%'}}>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="pull-right total-number">{fiveRating}</div>
                                    </div>
                                    <div className="pull-left rate-block">
                                        <div className="pull-left rating" >
                                            <div className="star-rate" ><span className="fa fa-star"></span> 4 </div>
                                        </div>
                                        <div className="pull-left rate-bar">
                                            <div className="progress">
                                                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{width: (totalReviews/fourRating)+'%'}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right total-number">{fourRating}</div>
                                    </div>


                                    <div className="pull-left rate-block">
                                        <div className="pull-left rating" >
                                            <div className="star-rate" ><span className="fa fa-star"></span> 3 </div>
                                        </div>

                                        <div className="pull-left rate-bar">
                                            <div className="progress">
                                                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{width: (totalReviews/threeRating)+'%'}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right total-number">{threeRating}</div>
                                    </div>
                                    <div className="pull-left rate-block">
                                        <div className="pull-left rating" >
                                            <div className="star-rate" ><span className="fa fa-star"></span> 2 </div>
                                        </div>
                                        <div className="pull-left rate-bar">
                                            <div className="progress">
                                                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{width: (totalReviews/twoRating)+'%'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pull-right total-number">{twoRating}</div>
                                </div>


                                
                                <div className="pull-left rate-block">
                                    <div className="pull-left rating" >
                                        <div className="star-rate" ><span className="fa fa-star"></span> 1 </div>
                                    </div>
                                    <div className="pull-left rate-bar">
                                        <div className="progress">
                                            <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{width: (totalReviews/oneRating)+'%'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="pull-right total-number">{oneRating}</div>
                            </div>
                            <div className="clearfix"></div>    
                        </div>
                    
                    <div className="col-md-2 col-12">
                        <h5>PROS</h5>
                       
                        <ul>
                         {review.product_pros.map((item,index) =>
                            <li key={item}>{item}</li>
                            )}
                        </ul>
                      
                    </div>


                    <div className="col-md-2 col-12">
                        <h5>CONS</h5>
                         <ul>
                         {review.product_cons.map((item,index) =>
                            <li key={item}> {item}</li>
                            )}
                        </ul>
                    </div>

                </div>


                <div className="row reviews">
                    <div className="col-md-2 col-12">
                        <h5>Phone arena</h5>
                        <div className="rating-wraper">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                         <span className="rate-number">12-04-2018</span>
                    </div>
                    <div className="col-md-10 col-12">
                    </div>
                </div>


                <div className="row reviews">
                    <div className="col-md-2 col-12">
                        <h5>Phone arena</h5>
                        <div className="rating-wraper">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <span className="rate-number">12-04-2018</span>
                    </div>
                    <div className="col-md-10 col-12">
                        <p>Good build quality, Fast charging, Big and nice display, Good performance
                        Unconfortable grip, ANDROID!!</p>
                        <p>I had it for 2 months. I think its a good android phone but i want back my iPhone 8 plus! I try to use android but i cant stand it. My last 3 Phone was iPhone but i had before android. If you an android fan this is a good choice. Sorry for my english mistakes!!</p>
                    </div>
                </div>
                
                </div>


                <div className="row">
                    <a className="collapsed showlink" data-toggle="collapse" href="#collapseSummary2" aria-expanded="false" aria-controls="collapseSummary"></a>
                </div>

                <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>

                </div>
                </div>

            ) : ( <div></div> )}

         </div>

    )
}
}
export default ProductReview;
