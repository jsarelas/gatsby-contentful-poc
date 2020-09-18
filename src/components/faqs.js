import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Faqs = () => {
  const data = useStaticQuery(graphql`
    query { allContentfulFaQs {
      edges { 
        node {
          id
          question
          answer
          }
        }
      }
    }
  `)

  return (
      <ol>
         {data.allContentfulFaQs.edges.map((edge) => {
          return(
            <li key={edge.node.id}>
              <Link to={`/faq/${edge.node.id}`}>
                <h4>{edge.node.question}</h4>
                <p>{edge.node.answer}</p>
              </Link>
            </li>
          )}
         )}
      </ol>
    )
  }

export default Faqs