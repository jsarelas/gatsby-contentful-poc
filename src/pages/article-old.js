import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

const ArticlePage = () => (
  <Layout>
    <SEO title="Article" />
    <h1>This is the BRC Article Page</h1>
    <p>Per slug get single article</p>
    <Link to="/">Go home</Link><br />
    <Link to="/topics">go to topics</Link>
  </Layout>
)

export default ArticlePage
