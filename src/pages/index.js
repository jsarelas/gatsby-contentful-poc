import React from "react"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Faqs from "../components/faqs"
import Articles from "../components/articles"
import Categories from "../components/categories"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to the Paypal Business Resource Center</h1>
      
      <h2>Frequently asked questions.</h2>
      <Faqs/>

      <h2>Featured articles.</h2>
      <Articles/>

      <h2>Explore articles by topic.</h2>
      <Categories/>
      
    </Layout>
  )
}

export default IndexPage
