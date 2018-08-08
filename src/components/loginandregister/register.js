import React, { Component } from "react";


class Register extends Component {

	constructor(porps){
		super()


		this.state = {

			fullname: '',
			email: '',
			subscription: '1',
			password: ''

		}




		this.onSubmit = this.onSubmit.bind(this)
		this.onCreateAccount = this.onCreateAccount.bind(this)

	}
	handleChange(e) {

	 	console.log(e.target.name)
	    let change = {}
	    change[e.target.name] = e.target.value
	    this.setState(change)
 
  	}
	onSubmit(event){
		event.preventDefault();
		let data = JSON.stringify({

				fullname:this.state.fullname,
	        	email: this.state.email,
	        	password:this.state.password,
	        	subscription: this.state.subscription
	        	
	       	    })


		console.log(data)
		// this.props.siginIn("value")

	}
	onCreateAccount(event){
		event.preventDefault();
		window.open("http://localhost:9000/login",'_self');
	}
 
	render(){

		return(

			<div id="wraper">
				<section id="loginpage">
					<div className="container">
      					<div className="row justify-content-md-center">
       						<div className="col-6 tittle-block text-center">
            					<img src="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png" srcSet="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png 1x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-2x.png 2x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
	                 			<h5>Register</h5>
        					</div>
     					</div>
      					<div className="row justify-content-md-center">
       						<div className="col-12 col-md-5 login-form-block">
		               			<form>
		               			  	<div className="form-group">
		                        		<input name="fullname" value={this.state.fullname} onChange={this.handleChange.bind(this)} type="text" id="name" className="form-control" required/>
		                        		<label className="form-control-placeholder" htmlFor="email">Fullname</label>
	                      			</div>
	                      			<div className="form-group">
		                        		<input name="email" value={this.state.email} onChange={this.handleChange.bind(this)} type="text" id="email" className="form-control" required/>
		                        		<label className="form-control-placeholder" htmlFor="email">Email</label>
	                      			</div>
	                      			<div className="form-group">
	                        			<input name="password" value={this.state.password} onChange={this.handleChange.bind(this)} type="password" id="password" className="form-control" autoComplete="off" required />
	                        			<label className="form-control-placeholder" htmlFor="password">Password</label>
	                      			</div>
		                      		<div className="button-container text-center">
	                          			<button type="submit" className="btn btn-dark" onClick={this.onSubmit} >Sign up</button>
		                          		<p></p>
				                         <button type="submit" className="btn btn-outline-dark" onClick={this.onCreateAccount}>Login</button>
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
export default Register;