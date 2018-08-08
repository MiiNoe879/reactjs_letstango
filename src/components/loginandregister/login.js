import React, { Component } from "react";
import { connect } from "react-redux";
import { signInUser } from '../../actions/signintest';




//For any field errors upon submission (i.e. not instant check)

// const validateAndSignInUser = (values, dispatch) => {
//   return dispatch(signInUser(values))
//     .then((result) => {
//       // Note: Error's "data" is in result.payload.response.data (inside "response")
//       // success's "data" is in result.payload.data
//       if (result.payload.response && result.payload.response.status !== 200) {
//         dispatch(signInUserFailure(result.payload.response.data));
//         throw new SubmissionError(result.payload.response.data);
//       }

//       //Store JWT Token to browser session storage 
//       //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
//       //sessionStorage = persisted only in current tab
//       sessionStorage.setItem('jwtToken', result.payload.data.token);
//       //let other components know that everything is fine by updating the redux` state
//       dispatch(signInUserSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
//     });
// }



class Login extends Component {

	constructor(porps){
		super()

		this.state = {

			email: '',
			password: ''

		}

		this.onSubmit = this.onSubmit.bind(this)
		this.onCreateAccount = this.onCreateAccount.bind(this)
		this.onSendLoginDataToserver = this.onSendLoginDataToserver.bind(this)
	}
	 handleChange(e) {

	    let change = {}
	    change[e.target.name] = e.target.value
	    this.setState(change)
  }
	onSubmit(event){
		event.preventDefault();
		console.log("onSubmit")

		this.onSendLoginDataToserver()

		// let data = JSON.stringify({
	 //        	email: this.state.email,
	 //        	password:this.state.password
	        	
	 //       	    })

			console.log("onSubmit2")
		
	}
	onCreateAccount(event){
		window.open("http://localhost:9000/register",'_self');
	}

	onSendLoginDataToserver(){

		console.log("onSendLoginDataToserver")

		this.props.signInUser("values").then((result) => {
      // Note: Error's "data" is in result.payload.response.data (inside "response")
      // success's "data" is in result.payload.data
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(signInUserFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response.data);
      }

      //Store JWT Token to browser session storage 
      //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
      //sessionStorage = persisted only in current tab
      sessionStorage.setItem('jwtToken', result.payload.data.token);
      //let other components know that everything is fine by updating the redux` state
      dispatch(signInUserSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
    })

	}


	render(){
		return(

			<div id="wraper">
				<section id="loginpage">
					<div className="container">
      					<div className="row justify-content-md-center">
       						<div className="col-6 tittle-block text-center">
            					<img src="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png" srcSet="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png 1x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-2x.png 2x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
	                 			<h5>Login</h5>
        					</div>
     					</div>
      					<div className="row justify-content-md-center">
       						<div className="col-12 col-md-5 login-form-block">
		               			<form>
		               			  	<div className="form-group">
		                        		<input name="email" value={this.state.email} onChange={this.handleChange.bind(this)} type="text" id="name" className="form-control" required/>
		                        		<label className="form-control-placeholder" htmlFor="email">Email</label>
	                      			</div>
	                      			<div className="form-group">
	                        			<input name="password" value={this.state.password}  onChange={this.handleChange.bind(this)} type="password" id="password" className="form-control" required />
	                        			<label className="form-control-placeholder" htmlFor="password">Password</label>
	                      			</div>
		                      		<div className="button-container text-center">
	                          			<button type="submit" className="btn btn-dark" onClick={this.onSubmit} >Submit</button>
		                          		<p><a href="#">Forget password</a></p>
				                         <button type="submit" className="btn btn-outline-dark" onClick={this.onCreateAccount}>Create Account</button>
	                      			</div>
	                			</form>
          					</div>
     					</div>
      				</div>
				<div className="clearfix"></div>
				</section>
			<div className="clearfix"></div>
			</div>


		);
	}
}

export default connect(null, { signInUser })(Login);
