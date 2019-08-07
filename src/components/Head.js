import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from 'utils/typography'

export default class Head extends Component {
    render() {
        return (
            <Helmet>
                <TypographyStyle typography={typography} />
                <GoogleFont typography={typography} />
                
            </Helmet>
        )
    }
}
