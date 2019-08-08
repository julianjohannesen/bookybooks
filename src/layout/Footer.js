import React from 'react'

const style = {
}

export default function Footer() {
    return (
        <footer className="footer" style={style}>
          <div className="content has-text-centered">
            <p>
              <strong>MyBooks</strong> by <a href="https://github.com/julianjohannesen">Julian Johannesen</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
          </div>
        </footer>
    )
}
