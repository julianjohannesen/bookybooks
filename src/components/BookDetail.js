import React from 'react';
import cn from 'classnames';
import uuidv4 from 'uuid/v4';
import thumbnailDefault from '../assets/thumbnailDefault.png';

//! handleClose does not need to be passed from anywhere, if all it's doing is closing the modal. It should just be defined here. authorList makes more sense because I use it in more than one component

//! Could refactor this with Bulma modal style and React Router modal script https://reacttraining.com/react-router/web/example/modal-gallery

export default function BookDetail({book, authorList, generateRatings, handleClose, show}) {

    const {
        title = 'Title unavailable',
        subtitle = "",
        authors = ['Author unavailable'],
        publisher = 'Publisher unavailable',
        publishedDate = 'Published date unavailable',
        description = 'Description unavailable',
        pageCount = 'Page count unavailable',
        categories = ['Categories unavailable'],
        averageRating = 0,
        ratingsCount = 0,
        imageLinks = { thumbnail: thumbnailDefault },
        //language = 'Language unavailable',
        //previewLink = '',
        infoLink = '',
        //canonicalVolumeLink = '',
    } = book.volumeInfo

    // show is a boolean value passed to BookDetail
    const showModal = cn({
        modal: true,
        ['is-active']: show
    });

    return (
        //! redo with classnames, move logic out of JSX
        //! And get rid of all of the inline styling, e.g. on figure
        <div className={showModal}>
            <div className="modal-background">
            </div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button 
                        aria-label="close"
                        className="delete" 
                        onClick={handleClose} 
                    ></button>
                </header>
                <section className="modal-card-body">
                    <figure 
                        className={cn("image", "is-pulled-left")} 
                        style={{ maxWidth: "128px", marginRight: "1em", }}
                    >
                        <img 
                            src={imageLinks.thumbnail} 
                            alt="Book cover" 
                            style={{ backgroundColor: "#ccc", border: "1px solid #ccc", }} 
                        />
                    </figure>

                    <div style={{ marginLeft: "calc(128px + 2em)" }}>
                        <h1 className="title">{title}</h1>
                        <h2 className="subtitle">{subtitle}</h2>
                        <h3 className="subtitle" >
                            <strong>By</strong>: {authorList(authors)}
                        </h3>
                        {generateRatings(averageRating, ratingsCount)}

                        {/*! Need a way to see full description*/}
                        <p><strong>Description</strong>: {description.substring(0, 500)}</p>
                        <p><strong>Publisher</strong>: {publisher}</p>
                        <p><strong>Publication Date</strong>: {publishedDate}</p>
                        <p><strong>Pages</strong>: {pageCount}</p>
                        <p><strong>Categories</strong>: {categories.map(cat => <span key={uuidv4()}>{cat}</span>)}</p>
                        <button className="button is-primary" href={infoLink} title="Additional information on the Google Books site">Additional</button>
                    </div>
                </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Shelve</button>
                        <button 
                            aria-label="close"
                            className="button" 
                            onClick={handleClose} 
                        >Cancel</button>
                    </footer>
            </div>
            </div>
            )
        }

