import React from 'react'
import PropTypes from 'prop-types'
const Footer=({ title })=> {
  return (
    <footer className='footer'>
      <h1>{title}</h1>
      <button className='btn'>Add</button>
    </footer>
  )
}
Footer.defaultProps = {
  title: 'Rohan Awasthi'
}

Footer.propTypes = {
  title: PropTypes.string.isRequired
}

 const footerstyle = {
    color: 'blue', 
    backgroundColor:'green' }


export default Footer