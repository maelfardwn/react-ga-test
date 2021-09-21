import React, {Component} from 'react'
import MetaDecorator from '../components/MetaDecorator'
import contact from '../assets/contact.png'
import { Helmet } from 'react-helmet'

import {ReactTitle} from 'react-meta-tags';
class Contact extends Component {
  render(){
  return(
    <div>
      
        <ReactTitle title="Page 2"/>
          <div className="content"> Some Content </div>
        
        <h1>this is the Contact Page</h1>
    </div>
  )
}
}

export default Contact