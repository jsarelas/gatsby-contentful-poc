import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

const TopicsPage = () => (
  <Layout>
    <SEO title="Topics" />
    <h1>This is the BRC Topics page</h1>
    <p>Per slug display articles and other topics</p>
    <Link to="/">Go home</Link><br />
    <Link to="/article">Go to article</Link>
  </Layout>
)

export default TopicsPage
