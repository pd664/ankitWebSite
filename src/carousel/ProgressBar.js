import React from 'react'
import './progressBar.css';
import PropTypes from 'prop-types'
// import {ProgressBar} from 'react-bootstrap'
const Progressbar = ({ value, max }) => {
  return (
    <progress value={value} max={max} className="bar" />
  )
}

Progressbar.propTypes = {
    now: PropTypes.number.isRequired,
    max: PropTypes.number
}

Progressbar.defaultProps = {
    max: 100
}

export default Progressbar
