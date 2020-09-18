import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/common/layout'
 
export const query = graphql`
    query($slug: String!){
        contentfulArticle(slug: {eq: $slug}){
            slug
            title
            description
            createdAt(formatString: "MMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Article = (props) => {
    return (
        <Layout>
            <h1>Article Template</h1>
            <h2>slug: {props.data.contentfulArticle.slug}</h2>
            <h3>{props.data.contentfulArticle.title}</h3>
            <h4>{props.data.contentfulArticle.description}</h4>
            <p>{props.data.contentfulArticle.createdAt}</p>
            {documentToReactComponents(props.data.contentfulArticle.body.json)}
        </Layout>
    )
}

export default Article