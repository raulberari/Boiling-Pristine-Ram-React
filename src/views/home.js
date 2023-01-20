import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Boiling Pristine Ram</title>
        <meta property="og:title" content="Boiling Pristine Ram" />
      </Helmet>
      <h1>Heading</h1>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
    </div>
  )
}

export default Home
