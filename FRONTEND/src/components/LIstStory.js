import React, { Component } from 'react'
import callApi from './../apicall/apiCaller'

class LIstStory extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data : []
    }
  }
  componentDidUpdate () {
    let loai = this.props.onSelectType === 1 ? 'kinhdi' :
               this.props.onSelectType === 2 ? 'ngontinh' :
               this.props.onSelectType === 3 ? 'vientuong' : ''
    callApi(`storiesbyloai/${loai}`,'GET',null).then(res=>{
      if(res.data){
        this.setState({
          data : res.data
        })
      }
    })
  }
  componentDidMount() {
    
      let loai = this.props.onSelectType === 1 ? 'kinhdi' :
                 this.props.onSelectType === 2 ? 'ngontinh' :
                 this.props.onSelectType === 3 ? 'vientuong' : ''
      callApi(`storiesbyloai/${loai}`,'GET',null).then(res=>{
        if(res.data){
          this.setState({
            data : res.data
          })
        }
      })
    
  }

  onRenderData () {
    let result = ''
    if(this.state.data.length>0){
      result = this.state.data.map((value,index)=>{
        return(
          <li className="media">
          <img style={{ height: '250px', width: '150px', marginLeft: '25px' }} src={value.img} className="mr-3" alt="..." />
          <div className="media-body">
            <h5 className="mt-0 mb-1">{value.tentruyen}</h5>
           {value.tieude}
              </div>
           </li>
        )
      })
    }
    return result
  }

  render() {
   
    return (
      <ul className="list-unstyled">
        {this.onRenderData()}
      </ul>
    )
  }
}


export default LIstStory;