import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import OAuth2 from '../components/OAuth2';

export default function Header() {
    return (
        <React.Fragment>
            <nav className={cn("navbar")} role="navigation" aria-label="main navigation" style={{backgroundColor: "#eff0eb"}}>
                <div className="navbar-brand">
                    <a href="https://www.google.com" role="button" className={cn("navbar-burger", "burger")} aria-label="menu" aria-expanded="false" data-target="navbar">
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
                            <a href="#" className="navbar-link">More</a>
                            <div className="navbar-dropdown">
                                <Link to="/about" className="navbar-item">About</Link>
                                <Link to="/contact" className="navbar-item">Contact</Link>
                                <hr className="navbar-divider" />
                                <a href="https://github.com/julianjohannesen/bookybooks" className="navbar-item">Repo</a>
                                <a href="https://github.com/julianjohannesen/bookybooks/issues" className="navbar-item">Report an issue</a>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <OAuth2 
                                handleAuthClick={this.props.handleAuthClick}
                                isSignedIn={this.props.isSignedIn}
                            />
                        </div>
                    </div>
                </div>
            </nav>

            <header className="header">
                <h1 className="title">BookyBooks</h1>
                <h2 className="subtitle">Books, Authors, Thoughts</h2>
            </header>
        </React.Fragment>
    )
}
