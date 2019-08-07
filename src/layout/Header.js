import React from 'react'

const style = {
    backgroundColor: "lightBlue",
    color: "white",
    fontSize: "1.5em",
    padding: "3em",
    border: "1px solid green",
    marginBottom: "1.5em"
}

export default function Header() {
    return (
        <div style={style}>
            <p>This is the header.</p>
            <p>The header needs to contain a small menu that allows users to log in and out and see the about page.</p>
        </div>
    )
}
