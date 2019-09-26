import React, { Component } from 'react'
import Helmet from 'react-helmet';
// Typography doesn't play well with CRA, but using the React helper components still seems to work. See https://github.com/KyleAMathews/typography.js/issues/177
//import typography from '../utils/Typography';
//import { TypographyStyle, GoogleFont } from 'react-typography'

export default class Head extends Component {
    render() {
        // <TypographyStyle typography={typography} />
        // {/* This will appear in the body */}
        // <GoogleFont typography={typography} />
        return (
            <div>
                
                <Helmet>
                    <meta name="author" content="Julian Johannesen" />
                    <meta name="description" content="BookyBooks is a personal library for storing, sorting, filtering, tagging, and writing about your favorite books." />
                    
                    <meta property="og:title" content="BookyBooks" />
                    <meta property="og:site_name" content="BookyBooks" />
                    <meta property="og:url" content="https://BookyBooks.org" />
                    <meta property="og:description" content="BookyBooks is a place to keep track of what you're reading and what you're writing about what you're reading." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="" />

                    {/* Favicon generics: 512x512 152x152 144x144 120x120 114x114 72x72 64x64 57x57 48x48 32x32 24x24 16x16 */}
                    <link rel="icon" href="%PUBLIC_URL%/favicon-16.png" sizes="16x16" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-24.png" sizes="24x24" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-32.png" sizes="32x32" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-48.png" sizes="48x48" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-57.png" sizes="57x57" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-64.png" sizes="64x64" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-72.png" sizes="72x72" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-114.png" sizes="114x114" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-120.png" sizes="120x120" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-144.png" sizes="144x144" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-152.png" sizes="152x152" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon-512.png" sizes="512x512" />

                    <script type="text/javascript" async defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                    
                </Helmet>
            </div>
        )
    }
}
