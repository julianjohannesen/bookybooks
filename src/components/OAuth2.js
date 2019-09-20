import React from 'react';
import cn from 'classnames';

export default function OAuth2 ({authProps}) {

    const handleAuthClick = isSignedIn => {
		if (isSignedIn) { authProps.signOut() }
		else { authProps.signIn() }
		console.log("handleAuthClick fires. Am I signed in?", authProps.isSignedIn, "Am I autherized?", authProps.isAuthorized, "What does the user object look like?", authProps.user);
    }
    
    return (
        <button 
            className={cn('button', 'primary')} 
            id="sign-in" 
            onClick={() => handleAuthClick(authProps.isSignedIn)}
        >
            {authProps.isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
    )
}