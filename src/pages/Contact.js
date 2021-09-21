import React from 'react'
import MetaDecorator from '../components/MetaDecorator'
import contact from '../assets/contact.png'

export default function Contact(){
  return(
    <div>
    <MetaDecorator description="This is Ridwan test Contact opengraph" title="opengraph Test Contact" imageUrl={contact} imageAlt="contact with contact image"/>
      <h1>this is the Contact Page</h1>
    </div>
  )
}