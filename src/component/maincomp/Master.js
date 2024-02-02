import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Master = (props) => {
  return (
    <div>
      <Header/>
      <props.Rcf></props.Rcf>
      <Footer/>
    </div>
  )
}

export default Master