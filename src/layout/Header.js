import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Styled from 'styled-components';
import OAuth2 from '../components/OAuth2';
import SimpleModal from '../components/SimpleModal';

//! Read a little about Aria and burger menus

const Button = Styled.button`
    &::after {
        right: -0.2em;
    };
    background: none;
    border: none;
    padding: 0.5rem 0.75rem;
`

export default function Header({ authProps }) {

    const handleBurgerClick = (event) => {
        event.target.classList.toggle('is-active');
        document.getElementById('navbar').classList.toggle('is-active');
    }

    const revokeAccess = (event) => {
        event.preventDefault();
        if(!authProps.isSignedIn){
            document.querySelector('dialog').showModal();
            return;
        }
        authProps.revokeAccess()
    }

    return (
        <Fragment>
            <header
                aria-label="main navigation"
                className={cn("navbar")}
                role="navigation"     
            >
                <div className="navbar-brand">

                    <Link className="navbar-item" to="/">
                        <h1 className={cn('title', 'is-4', 'is-marginless')}>BookyBooks</h1>
                    </Link>
                    <button
                        aria-label="menu"
                        aria-expanded="false"
                        className={cn("navbar-burger", "burger")}
                        id="burger"
                        onClick={handleBurgerClick}
                        style={{background:'none', border:'none', padding:'0'}}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbar" className="navbar-menu">
                    <div className="navbar-start"></div>
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/library" className="navbar-item">Library</Link>
                        <Link to="/reviews" className="navbar-item">Reviews</Link>
                        <div className={cn("navbar-item", "has-dropdown", "is-hoverable")}>
                            <Button className="navbar-link" >
                                More
                            </Button>
                            <div className="navbar-dropdown">
                                <Link to="/about" className="navbar-item">About</Link>
                                <Link to="/contact" className="navbar-item">Contact</Link>
                                <hr className="navbar-divider" />
                                <a href="/" onClick={revokeAccess} className="navbar-item">Revoke Access</a>
                                <hr className="navbar-divider" />
                                <a href="https://github.com/julianjohannesen/bookybooks" className="navbar-item">Repo</a>
                                <a href="https://github.com/julianjohannesen/bookybooks/issues" className="navbar-item">Report an issue</a>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <OAuth2 authProps={authProps} />
                        </div>
                    </div>
                </div>
            
            </header>

            <SimpleModal content="You must be signed in in order to revoke BookyBooks' access to your Google Books account." />

        </Fragment>

    )
}
