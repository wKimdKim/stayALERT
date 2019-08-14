import * as React from 'react';
import { Component } from 'react';
import Login from '../Login/Login';
 
class Home extends Component{
    public render() { 
        return ( 
            <div className = "home-container">
                <Login/>
            </div>
         );
    }
}
 
export default Home;