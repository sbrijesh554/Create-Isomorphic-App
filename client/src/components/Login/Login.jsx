import React from 'react';
import api from '../../services/api';
import './Login.scss';

class Login extends React.Component{
    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }

    authenticateUser = () => {
        const username = this.username.current.value;
        const password = this.password.current.value;
        api.authenticateUser(username,password).then((resp)=>{
            this.props.updateAuthStore(resp.data);
        }).catch((err)=>{
            console.log(err.toString());
        });
    }

    render(){
        return(
            <div className = "container">
                <div className = "field">
                    <label>USERNAME</label>
                    <input type="text" ref={this.username}></input>
                </div>
                <div className = "field">
                    <label>PASSWORD</label>
                    <input type="password" ref={this.password}></input>
                </div>
                <div className = "container">
                    <button onClick={this.authenticateUser}>SUBMIT</button>
                </div>
                <div className = "container">
                    <span>{this.error}</span>
                </div>
            </div>
        )
    }
}

export default Login