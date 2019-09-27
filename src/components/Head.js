import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet';
// Typography doesn't play well with CRA, but using the React helper components still seems to work. See https://github.com/KyleAMathews/typography.js/issues/177
import typography from '../utils/Typography';
import { TypographyStyle, GoogleFont } from 'react-typography'

export default class Head extends Component {
    render() {

        return (
            <Fragment>
                <TypographyStyle typography={typography} />
                {/* This will appear in the body */}
                <GoogleFont typography={typography} />

                <Helmet>

                    <meta name="author" content="Julian Johannesen" />
                    <meta name="description" content="BookyBooks is a personal library for storing, sorting, filtering, tagging, and writing about your favorite books." />

                    <meta property="og:title" content="BookyBooks" />
                    <meta property="og:site_name" content="BookyBooks" />
                    <meta property="og:url" content="https://BookyBooks.org" />
                    <meta property="og:description" content="BookyBooks is a place to keep track of what you're reading and what you're writing about what you're reading." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#9f00a7" />
                    <meta name="theme-color" content="#ffffff" />

                    <script type="text/javascript" async defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

                </Helmet>

            </Fragment>
        )
    }
}
