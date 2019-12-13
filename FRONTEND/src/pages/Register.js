import React, { Component } from 'react'
import { conenct } from 'react-redux'
import callApi from './../apicall/apiCaller'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            email : '',
            psw_repeat  :''
        }
    }
    onChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    onSubmit = () =>{
        let { username , password , email , psw_repeat } = this.state;
        if(password === psw_repeat){
            callApi('users','POST',{
                username:username,
                password:password,
                email : email
                
            }).then(res=>{
                console.log(res.data)
            })
        }
    }

    render() {
        return (
            <form action="action_page.php">
                <div className="container">
                    <hr />
                    <label htmlFor="email"><b>Username</b></label>
                    <input onChange = {(event)=>this.onChange(event)} type="text" placeholder="Enter username" name="username" required />
                    <label htmlFor="email"><b>Email</b></label>
                    <input onChange = {(event)=>this.onChange(event)} type="text" placeholder="Enter Email" name="email" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input onChange = {(event)=>this.onChange(event)} type="password" placeholder="Enter Password" name="password" required />
                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input onChange = {(event)=>this.onChange(event)} type="password" placeholder="Repeat Password" name="psw_repeat" required />
                    <hr />
                    <button onClick = { () => this.onSubmit()} type="button" className="registerbtn">Register</button>
                </div>
            </form>
        )
    }
}


export default Register;