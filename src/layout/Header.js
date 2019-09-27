import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import OAuth2 from '../components/OAuth2';
import Modal from '../components/Modal';

//! Read a little about Aria and burger menus

export default function Header({ authProps }) {

    const handleBurgerClick = (event) => {
        event.target.classList.toggle('is-active');
        document.getElementById('navbar').classList.toggle('is-active');
    }

    const handleModalClose = (event) => {
        document.querySelector('.modal').classList.toggle('is-active');
    }

    const revokeAccess = (event) => {
        if(!authProps.isSignedIn){
            handleModalClose()
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
                    <a
                        aria-label="menu"
                        aria-expanded="false"
                        className={cn("navbar-burger", "burger")}
                        id="burger"
                        onClick={handleBurgerClick}
                        role="button"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar" className="navbar-menu">
                    <div className="navbar-start"></div>
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/library" className="navbar-item">Library</Link>
                        <Link to="/reviews" className="navbar-item">Reviews</Link>
                        <div className={cn("navbar-item", "has-dropdown", "is-hoverable")}>
                            <a className="navbar-link">More</a>
                            <div className="navbar-dropdown">
                                <Link to="/about" className="navbar-item">About</Link>
                                <Link to="/contact" className="navbar-item">Contact</Link>
                                <hr className="navbar-divider" />
                                <a onClick={revokeAccess} className="navbar-item">Revoke Access</a>
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

            <Modal 
                className="modal" 
                content="You must be signed in in order to revoke BookyBooks' access to your Google Books account."
                footer={false}
                handleModalClose={handleModalClose}
                id="revoke-modal" 
                title="" 
            />
            </Fragment>

    )
}
