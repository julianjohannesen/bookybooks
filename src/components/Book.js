import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import Image from './BulmaImage';
import BookDetail from './BookDetail';
import defaultImg from '../assets/thumbnailDefault.png';

export default class Book extends React.Component {

    state = { show: false }
    
    showModal = () => this.setState({ show: true })
    hideModal = () => this.setState({ show: false })

    figStyle = {
        maxWidth: "128px", 
        marginRight: "1em", 
        marginTop: "-65px"
    }

    imgStyle = {
        backgroundColor: "#ccc", 
        border: "1px solid #ccc"
    }

    render(){
        //! I'm having trouble with how to use defaultProps correctly. I seem to have more luck defining default props while destructuring this.props.book.volumeInfo. One thing I don't understand is how this works, even though certain properties don't always appear in the volumeInfo, e.g. author. And it seems to work, even if I don't provide a default value.
        const { 
            title = 'Title Unavailable', 
            authors = ['Author Unavailable'], 
            averageRating = 0, 
            ratingsCount = 0, 
            imageLinks = {thumbnail: defaultImg}, 
            infoLink = '' 
        } = this.props.book.volumeInfo;

        return (
            <div className="tile is-parent" >
                <div className="tile is-child box" >

                    <Image 
                        src={imageLinks.thumbnail ? imageLinks.thumbnail : defaultImg}
                        alt={title} 
                        figClass={['is-pulled-left']}  
                        figStyle={this.figStyle} 
                        imgStyle={this.imgStyle} 
                    />

                    <div>
                        <h2 className="title">
                            <a className="is-size-5" href={infoLink} title={title}>{title}</a>
                        </h2>
                        <h3 className="subtitle" >
                            By: {authors.map(auth => <span key={uuidv4()}>{auth} </span>)}
                        </h3>
                        {/*this.props.generateRatings(averageRating, ratingsCount)*/}
                        <button 
                            aria-haspopup="true"
                            className="button is-primary modal-button" 
                            data-type="modal"
                            onClick={this.showModal} 
                            type="button"
                        >
                            See this Book
                        </button>

                        <BookDetail 
                            book={this.props.book} 
                            //generateRatings={this.props.generateRatings}
                            handleClose={this.hideModal}
                            show={this.state.show}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

Book.defaultProps = {}

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        averageRating: PropTypes.number,
        ratingsCount: PropTypes.number,
        imageLinks: PropTypes.object,
        infoLink: PropTypes.string
    }).isRequired
}

