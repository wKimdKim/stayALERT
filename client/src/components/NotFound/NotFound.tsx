import * as React from 'react';
import { Component } from 'react';
import './NotFound.css';
 
class NotFound extends Component{
    public render() { 
        return ( 
            <div className="not-found">
                <h3>404:Not Found</h3>
                <div className="frown">
                <i className="frown-icon far fa-frown"/>
                </div>
            </div>
         );
    }
}
 
export default NotFound;