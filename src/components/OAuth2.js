import React, { Component } from 'react';
import cn from 'classnames';

export default class OAuth2 extends Component {
    
    render() {
            
        return (
            <div>
                <button 
                    className={cn('button', 'primary')} 
                    id="sign-in" 
                    onClick={() => this.props.handleAuthClick(this.props.isSignedIn)}
                >
                    {this.props.isSignedIn ? 'Sign Out' : 'Sign In'}
                </button>
            </div>
        )
    }
}