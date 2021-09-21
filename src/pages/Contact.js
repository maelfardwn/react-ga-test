import React, {Component} from 'react'
import MetaDecorator from '../components/MetaDecorator'
import contact from '../assets/contact.png'
import { Helmet } from 'react-helmet'

import {ReactTitle} from 'react-meta-tags';
class Contact extends Component {
  render(){
  return(
    <div>
        <Helmet>
            
          <title>Contact Title</title>
          <meta name="title" content="Contact Title"/>
          <meta name="description" content="This is descripttion of contact page"/>
          {/* 
          <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://assesmenttestridwan.herokuapp.com/contact"/>
          <meta property="og:title" content="Contact Title OG"/>
          <meta property="og:description" content="This is descripttion of contact page OG"/>
          <meta property="og:image" content="https://assesmenttestridwan.herokuapp.com/assets/contact.png"/>
          {/* 
          <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://assesmenttestridwan.herokuapp.com/contact"/>
          <meta property="twitter:title" content="Contact Title Twitter"/>
          <meta property="twitter:description" content="This is descripttion of contact page Twitter"/>
          <meta property="twitter:image" content="https://assesmenttestridwan.herokuapp.com/assets/contact.png"/>
        </Helmet>
        <h1>this is the Contact Page</h1>
    </div>
  )
}
}

export default Contact