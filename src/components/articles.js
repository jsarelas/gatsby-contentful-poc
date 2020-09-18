import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Articles = () => {
  const data = useStaticQuery(graphql`
    query { allContentfulArticle {
      edges { 
        node {
            slug
            title
            description
            }
        }
      }
    }
  `)

  return (
      <>
         {data.allContentfulArticle.edges.map((edge) => {
          return(
            <div key={edge.node.slug}>
              <Link to={`/article/${edge.node.slug}`}>
                <h4>{edge.node.title}</h4>
                <p>{edge.node.description}</p>
              </Link>
            </div>
          )}
         )}
    </>
    )
  }

export default Articles