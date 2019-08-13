import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import cn from 'classnames';
import Image from './BulmaImage';
import BookDetail from './BookDetail';
import defaultImg from '../assets/thumbnailDefault.png';

export default class Book extends React.Component {

    //! Under 760px this layout looks like garbage
    state = { show: false }
    
    showModal = () => this.setState({ show: true })
    hideModal = () => this.setState({ show: false })

    authorList = (authors) => {
        let list = '';
        if(authors.length === 1) return authors[0];
        else authors.map( auth => list += auth + ", " );
        return list.slice(0,-2);
    }

    figStyle = {
        width: "128px", 
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
            publisher = 'Unknown',
            publishedDate = 'Unknown',
            averageRating = 0, 
            ratingsCount = 0, 
            imageLinks = {thumbnail: defaultImg}, 
            infoLink = '' 
        } = this.props.book.volumeInfo;

        return (
            <div className={cn('tile', 'is-parent')} >
                <div className={cn('tile', 'is-child', 'columns', 'box')} >

                    <Image 
                        src={imageLinks.thumbnail ? imageLinks.thumbnail : defaultImg}
                        alt={title} 
                        figClass={['column', 'is-one-third']}  
                        figStyle={this.figStyle} 
                        imgStyle={this.imgStyle} 
                    />

                    <div className={cn('column', 'is-two-thirds')}>
                        <h2 className='title' style={{marginTop:'0'}}>
                            <a className="is-size-5" href={infoLink} title={title}>{title}</a>
                        </h2>
                        <h3 className={cn('subtitle', 'is-size-6')} style={{marginBottom:'0'}}>
                            By: {this.authorList(authors)}
                        </h3>
                        <h4 className={cn('subtitle', 'is-size-6', 'has-text-grey')} style={{marginTop: '.15em'}}><span data="publisher">{publisher}</span>, <date>{publishedDate.slice(0,4)}</date></h4>
                        {/*this.props.generateRatings(averageRating, ratingsCount)*/}
                        <button 
                            aria-haspopup="true"
                            className={cn('button', 'is-primary', 'modal-button')} 
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

