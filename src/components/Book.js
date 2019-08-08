import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import thumbnailDefault from '../assets/thumbnailDefault.png'
import BookDetails from './BookDetails'

export default class BookCard extends React.Component {

    state = { show: false }
    
    showModal = () => this.setState({ show: true })
    hideModal = () => this.setState({ show: false })

    render(){

        const { 
            title = 'Title unavailable',
            authors = ['Author unavailable'],
            averageRating = 0,
            ratingsCount = 0,
            imageLinks = { thumbnail: thumbnailDefault },
            infoLink = '',
        } = this.props.book.volumeInfo
            
        return (
            <div className="tile is-parent" style={{ marginTop: "60px", }}>
                <div className="tile is-child box" >
                    <figure className="image is-pulled-left" style={{ maxWidth: "128px", marginRight: "1em", marginTop: "-65px", }}>
                        <img src={imageLinks.thumbnail} alt="Book cover" style={{ backgroundColor: "#ccc", border: "1px solid #ccc", }} />
                    </figure>
                    <div className="" style={{ marginLeft: "calc(128px + 2em)" }}>
                        <h2 className="title">
                            <a className="is-size-4" href={infoLink} title={title}>{title}</a>
                        </h2>
                        <h3 className="subtitle" >
                            By: {authors.map(auth => <span key={uuidv4()}>{auth} </span>)}
                        </h3>
                        {this.props.generateRatings(averageRating, ratingsCount)}
                        <button 
                            aria-haspopup="true"
                            className="button is-primary modal-button" 
                            data-type="modal"
                            onClick={this.showModal} 
                            type="button"
                        >
                            See this Book
                        </button>

                        <BookDetails 
                            book={this.props.book} 
                            generateRatings={this.props.generateRatings}
                            handleClose={this.hideModal}
                            show={this.state.show}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        averageRating: PropTypes.number,
        ratingsCount: PropTypes.number,
        imageLinks: PropTypes.object,
        infoLink: PropTypes.string
    }).isRequired
}

