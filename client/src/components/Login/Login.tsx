import * as React from 'react';
import { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
 
export interface ILoginState {
    'isLoggedIn': boolean,
    'name': string,
    'picture': any,
    'userID': string 
}
 
class Login extends Component<{},ILoginState> {
    public state = { 
        'isLoggedIn': false,
        'name': '',  
        'picture': '',
        'userID': '' 
    }
    public nothing:any;
    public componentClicked= () => {this.nothing = null};
    public responseFacebook = (response:any) =>{this.nothing=null};
    public render() { 
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = null;
        }
        else{
            fbContent=(<FacebookLogin
                appId="2455507074681133"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}/>)
        }
        return ( <div>
            {fbContent}
        </div> );
    }
}
 
export default Login;

