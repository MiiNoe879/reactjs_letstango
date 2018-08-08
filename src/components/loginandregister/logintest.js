import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { userActions } from '../../actions/signin';

class LoginTest extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (


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
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input name="username" value={username} onChange={this.handleChange} type="text" id="username" className="form-control" required />
                                        <label className="form-control-placeholder" htmlFor="password">Email</label>
                                        
                                    </div>
                                    <div className="form-group">
                                        <input name="password" value={password} onChange={this.handleChange} type="password" id="password" className="form-control" required />
                                        <label className="form-control-placeholder" htmlFor="password">Password</label>
                                        
                                    </div>
                                    <div className="button-container text-center">
                                        <button type="submit" className="btn btn-dark">Submit</button>
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

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}




export default connect(mapStateToProps)(LoginTest);

