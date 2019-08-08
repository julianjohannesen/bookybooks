import React from 'react'
import uuidv4 from 'uuid/v4'
//import Ratings from './Ratings'
import Book from './Book'

export default function SearchResults({ books }) {

    const generateRows = () => {
        const arr = []
        for(let i=0; i<books.length; i++) {
            if((i+1) % 2 === 0) arr.push((
                <div key={uuidv4()} className="tile is-ancestor">     
                    <Book 
                        book={books[i-1]} 
                        //generateRatings={generateRatings} 
                    />     
                    <Book 
                        book={books[i]} 
                        //generateRatings={generateRatings} 
                    />     
                </div>
            ))
            if(i+1 === i.length) arr.push((
                <div key={uuidv4()} className="tile is-ancestor">
                    <Book 
                        book={books[i]} 
                        //generateRatings={generateRatings} 
                    />         
                </div>
            ))
        }
        return arr
    }

    // const generateRatings = (averageRating, ratingsCount) => {
    //     if(averageRating){
    //         return (
    //             <h4 className="subtitle" style={{ marginTop: "-1.25rem" }} >
    //                 <strong>Average rating</strong>:&nbsp;
    //                 <Ratings
    //                     rating={averageRating}
    //                     widgetDimensions="30px"
    //                     widgetRatedColors="gold"
    //                     widgetSpacings="2px"
    //                 >
    //                 <Ratings.Widget />
    //                 <Ratings.Widget />
    //                 <Ratings.Widget />
    //                 <Ratings.Widget />
    //                 <Ratings.Widget />
    //                 </Ratings>
    //                 ({ratingsCount})
    //             </h4>
    //         )
    //     }
    // }
    
    return (
        <section className="section">
        
        {
            books.length > 0
            ? generateRows()
            : <p className="has-text-centered is-size-3">No results</p>
        }
                
        </section>
    )
}

