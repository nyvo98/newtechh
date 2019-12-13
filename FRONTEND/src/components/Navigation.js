import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoogleLogout } from 'react-google-login';


class Navigation extends Component {


  logout = () =>{
    this.props.onLogout()
  }
  render() {
    console.log(this.props.imageUrl)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button type="button" className="navbar-brand btn btn-success" onClick={() => this.props.selectType(null)}>HOME</button>
        {
          this.props.role === 'admin' ? <button type="button" className="navbar-brand btn btn-primary" onClick={() => this.props.selectType('admin')}>ADMIN</button> : ''
        }
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="# "><span className="sr-only">(current)</span></a>
            </li><li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Thể loại
                </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" onClick={() => this.props.selectType(1)}>Kinh dị</a>
                <a className="dropdown-item" onClick={() => this.props.selectType(2)}>Ngôn tình</a>
                <a className="dropdown-item" onClick={() => this.props.selectType(3)}>Viễn tưởng</a>
              </div>
            </li>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button> */}
            {
              this.props.isAuthenticate ? <li>
              <img src={this.props.imageUrl} alt="Avatar" style={{width: '30px'}} />
            </li> : ''
            }
          </ul>
          <form className="form-inline my-2 my-lg-0">


            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            {
              !this.props.isAuthenticate ? <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="button"
              onClick={() => this.props.selectType('login')}
            >Login</button> : this.props.responseGoole==='' 
              ? <button 
                  className="btn btn-outline-primary my-2 my-sm-0" 
                  type="button"
                  onClick = { () =>this.props.onLogout()}
                >Logout</button> 
              : <GoogleLogout
                clientId="938551061780-8igbiafklh7f6mqiql33uh0ccptfb9iv.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={()=>this.logout()}
              >
              </GoogleLogout>
          
          }
        
            </form>
          </div>
        </nav >
        )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    selectType: (typeSelect) => {
      dispatch({
        type: "SELECT_TYPE",
        typeSelect
      })
    },
    onLogout: () => {
      dispatch({
        type: "IS_LOGOUT"
      })
    }
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticate: state.isAuthenticate,
    role: state.role,
    responseGoole : state.responseGoole,
    imageUrl : state.imageUrl
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);