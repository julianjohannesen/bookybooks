import React from 'react';
import cn from 'classnames';

export default function OAuth2 ({authProps}) {

    const handleAuthClick = isSignedIn => {
		if (isSignedIn) { authProps.GoogleAuth.signOut() }
		else { authProps.GoogleAuth.signIn() }
		console.log("When does this fire?", authProps.isSignedIn, authProps.isAuthorized, authProps.user);
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