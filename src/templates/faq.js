import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/common/layout'
 
export const query = graphql`
    query($id: String){
        contentfulFaQs(id: {eq: $id}){
            question
            answer
            createdAt(formatString: "MMM Do, YYYY")
        }
    }
`

const Faq = (props) => {
    return (
        <Layout>
            <h1>FAQ Template</h1>
            <h3>{props.data.contentfulFaQs.question}</h3>
            <h4>{props.data.contentfulFaQs.answer}</h4>
            <p>{props.data.contentfulFaQs.createdAt}</p>
        </Layout>
    )
}
export default Faq