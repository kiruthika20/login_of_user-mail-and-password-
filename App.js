import React, { Component } from "react";
import './App.css';
import{connect} from 'react-redux';
import {login} from './action/loginAction';
class App extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    let {email,password}=this.state;
    let {islogingPending,islogingSuccess,LoginError}=this.props;
    return(
      
     <div className="container">
     <form  name="login" onSubmit={this.onSubmit}>
     <label>Email</label>
     <input type="email" name="email" placeholder="Enter your mail..." onChange={e=>this.setState({email:e.target.value})} />
     <br/>
     <label>Password</label>
     <input type="password" name="password" placeholder="Enter your password..." onChange={e=>this.setState({password:e.target.value})}/>
     <br/>
     <input type="submit" value="Login" />

     {islogingPending && <div>Please wait...</div>}
     {islogingSuccess && <div>Welcome Back!</div>}
     {LoginError && <div>{LoginError.message}</div>}
     
    </form>
      </div>
    )
  
} 
onSubmit=(e)=> {
  e.preventDefault();
  let {email,password}=this.state;
  this.props.login(email,password);
}
}
const mapStateToProps = (state) => {
  return {
    islogingPending: state.islogingPending,
    islogingSuccess: state.islogingSuccess,
    LoginError:state.LoginError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login:(email,password)=> dispatch(login(email,password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);