import React, { Component } from 'react'
import callApi from './../apicall/apiCaller'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = () => {
    callApi(`api/authenticate`, 'POST', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      if (res.data) {
        if (res.data.token) {
          this.props.onLogin(res.data.token, res.data.role, res.data.username,'','http://localhost:3000/image/ava.png')
          this.props.selectType(null)

        }
      }
    })
  }
  responseGoogle = (response) => {
    console.log(response.profileObj.imageUrl)
    if(!response.error){
     
      this.props.onLogin('google','user','',response,response.profileObj.imageUrl)
      this.props.selectType(null)
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <form action="/action_page.php">
            <div className="row">
              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>
              <div className="col">
                <a className="fb btn">
                  <i className="fa fa-facebook fa-fw" /> Login with Facebook
                </a>
                <GoogleLogin
                  clientId="938551061780-8igbiafklh7f6mqiql33uh0ccptfb9iv.apps.googleusercontent.com"
                  render={renderProps => (
                    <a onClick={renderProps.onClick} disabled={renderProps.disabled} className="google btn"><i className="fa fa-google fa-fw">
                      </i> Login with Google+
                    </a> 
                  )}
                  buttonText="Login"
                  onSuccess={(response)=>this.responseGoogle(response)}
                  onFailure={(response)=>this.responseGoogle(response)}
                  cookiePolicy={'single_host_origin'}
                />
                
              </div>
              <div className="col">
                <div className="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>
                <input onChange={(event) => this.onChange(event)} type="text" name="username" placeholder="Username" required />
                <input onChange={(event) => this.onChange(event)} type="password" name="password" placeholder="Password" required />
                <input onClick={() => this.onSubmit()} type="button" defaultValue="Login" />
              </div>
            </div>
          </form>
        </div>
        <div className="bottom-container">
          <div className="row">
            <div className="col">
              <a onClick={()=>this.props.selectType('register')} style={{ color: 'white' }} className="btn">Sign up</a>
            </div>
            <div className="col">
              <a href="#" style={{ color: 'white' }} className="btn">Forgot password?</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogin: (token, role, username,responseGoole,imageUrl) => {
      dispatch({
        type: "IS_AUTHENTICATE",
        token, role, username,responseGoole,imageUrl
      })
    },
    selectType: (typeSelect) => {
      dispatch({
        type: "SELECT_TYPE",
        typeSelect
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);