import React, { Component } from 'react'
import Helmet from 'react-helmet';
// Typography doesn't play well with CRA, but using the React helper components still seems to work. See https://github.com/KyleAMathews/typography.js/issues/177
import typography from '../utils/Typography';
import { TypographyStyle, GoogleFont } from 'react-typography'

export default class Head extends Component {
    render() {
        return (
            <div>
                <TypographyStyle typography={typography} />
                {/* This will appear in the body */}
                <GoogleFont typography={typography} />
                
                <Helmet>
                    <meta name="author" content="Julian Johannesen" />
                    <meta name="description" content="MyBooks is a personal library for storing, sorting, filtering, tagging, and writing about your favorite books." />
                    
                    <meta property="og:title" content="MyBooks" />
                    <meta property="og:site_name" content="MyBooks" />
                    <meta property="og:url" content="MyBooksLive.netlify.com" />
                    <meta property="og:description" content="MyBooks is a personal library for storing, sorting, filtering, tagging, and writing about your favorite books." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="" />

                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                </Helmet>
            </div>
        )
    }
}
