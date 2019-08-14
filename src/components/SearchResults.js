import React from 'react'
import uuidv4 from 'uuid/v4'
import Ratings from './Ratings'
import Book from './Book'

export default function SearchResults(props) {
    
    const {books} = props;

    // Create an array of JSX book objects
    const generateRows = () => {
        if(books.length < 1 ) return;
        // Array holder
        const arr = []
        // For each book
        for(let i=0; i<books.length; i++) {
            // If the book is at an even index, then push a row of two JSX book objects (the previous book and the current book) to the array holder
            if((i+1) % 2 === 0) arr.push((
                // The book rows are Bulma tiles
                <div key={uuidv4()} className="tile is-ancestor">     
                    <Book 
                        book={books[i-1]} 
                        generateRatings={generateRatings} 
                    />     
                    <Book 
                        book={books[i]} 
                        generateRatings={generateRatings} 
                    />     
                </div>
            ))
            // If there's an odd number of books, the final book gets it's own row
            if(i+1 === i.length) arr.push((
                <div key={uuidv4()} className="tile is-ancestor">
                    <Book 
                        book={books[i]} 
                        generateRatings={generateRatings} 
                    />         
                </div>
            ))
        }
        return arr
    }

    const generateRatings = (averageRating, ratingsCount) => {
        if(averageRating){
            return (
                <h4 className="subtitle" style={{ marginTop: "-1.25rem" }} >
                    <Ratings
                        rating={averageRating}
                        widgetDimensions="30px"
                        widgetRatedColors="gold"
                        widgetSpacings="2px"
                    >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    </Ratings>
                    ({ratingsCount})
                </h4>
            )
        }
    }
    
    return (
        <section className="section"> 
            {generateRows()}    
        </section>
    );
}

