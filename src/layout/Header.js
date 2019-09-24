import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import OAuth2 from '../components/OAuth2';

export default function Header({ authProps }) {
    //! Okay. Set the default behavior to show the mini-logo in the top left area, as in the standard bulma navbar. On the homepage, turn this off

    // something like this
    //if(location === 'homepage') {
    // classnames magic
    //}

    // style={{ backgroundColor: "#eff0eb" }}
    return (
        <React.Fragment>
            <nav
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
                        data-target="navbar"
                        href="https://www.google.com"
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
                            <button className="navbar-link" style={{ background: 'none', border: 'none' }}>More</button>
                            <div className="navbar-dropdown">
                                <Link to="/about" className="navbar-item">About</Link>
                                <Link to="/contact" className="navbar-item">Contact</Link>
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
            </nav>


        </React.Fragment>
    )
}

// <header className={cn('header', 'section')}>
//     <h1 className="title">BookyBooks</h1>
//     <h2 className="subtitle">Books, Authors, Thoughts</h2>
// </header>
