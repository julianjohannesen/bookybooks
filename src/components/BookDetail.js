import React from 'react'
import uuidv4 from 'uuid/v4'
import thumbnailDefault from '../assets/thumbnailDefault.png'

export default function BookDetails({book, generateRatings, handleClose, show}) {

    const {
        title = 'Title unavailable',
        subtitle = "",
        authors = ['Author unavailable'],
        publisher = 'Publisher unavailable]',
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


    return (
        <div className={show ? "modal is-block" : "modal is-hidden"} >
            <div className="modal-background"></div>
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
                        className="image is-pulled-left" 
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
                            <strong>By</strong>: {authors.map(auth => <span key={uuidv4()}>{auth} </span>)}
                        </h3>
                        {generateRatings(averageRating, ratingsCount)}

                        <p style={{marginBottom: "1em"}}><strong>Description</strong>: {description.substring(0, 500)}</p>
                        <p><strong>Publisher</strong>: {publisher}</p>
                        <p><strong>Publication Date</strong>: {publishedDate}</p>
                        <p><strong>Pages</strong>: {pageCount}</p>
                        <p style={{marginBottom: "1em"}}><strong>Categories</strong>: {categories.map(cat => <span key={uuidv4()}>{cat}</span>)}</p>
                        <a className="button is-primary" href={infoLink} title="Additional information on the Google Books site">Additional</a>
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

