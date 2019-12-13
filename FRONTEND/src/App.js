import React, { Component } from 'react'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import Navigation from './components/Navigation'
import AdminPage from './pages/AdminPage'
import { connect } from 'react-redux'
import ListStory from './components/LIstStory'

class App extends Component {
  
 
  render() {
    
      return (
        <div>
          <Navigation/>
          { this.props.selectType === null ? <MainPage/> :
            this.props.selectType === 'admin' ? <AdminPage/> : 
            this.props.selectType === 'login' ? <LoginPage/> :
            <ListStory onSelectType={this.props.selectType}/>}
        </div>
      )
     
  }
}

const mapStateToProps = state =>{
  return {
    selectType : state.selectType
  }
}


export default connect(mapStateToProps)(App);
