import PropTypes from "prop-types"
import React from "react"
import { Header } from 'marketing-components';

import "./header.css"

const LayoutHeader = ({ siteTitle }) => (
  <header className="App-header">
    <Header/>
  </header>
)

LayoutHeader.propTypes = {
  siteTitle: PropTypes.string,
}

LayoutHeader.defaultProps = {
  siteTitle: ``,
}

export default LayoutHeader
