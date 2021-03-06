import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const MetaDecorator =({title,description,imageUrl, imageAlt })=>{

    return(
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={imageUrl}/>
            <meta property="og:url" content={window.location.pathname + window.location.search}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image:alt" content={imageAlt}/> 
        </Helmet>
    )
}
MetaDecorator.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt:PropTypes.string.isRequired
}

export default MetaDecorator