import React from 'react'

const style = {
    backgroundColor: "lightBlue",
    color: "white",
    fontSize: "1.5em",
    padding: "3em",
    border: "1px solid green",
    marginTop: "1.5em"
}

export default function Footer() {
    return (
        <div style={style}>
            <p>This is the footer</p>
        </div>
    )
}
