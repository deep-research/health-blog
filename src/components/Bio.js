import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import logo from './logo.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={logo}
          alt={`Health Logo`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
          }}
        />
        <p style={{fontSize: "1.5rem", color: "#000000"}}>
          <a style={{textDecoration: "none", color: "#000000"}} href="/disclaimer"><i><b>HealthWritings.com</b>: A blog with practical ideas for improving your health!</i></a>
        </p>
      </div>
    )
  }
}

export default Bio
