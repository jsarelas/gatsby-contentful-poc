import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Categories = () => {
  const data = useStaticQuery(graphql`
    query { allContentfulCategory {
      edges { 
        node {
            slug
            title
            }
        }
      }
    }
  `)

  return (
      <>
         {data.allContentfulCategory.edges.map((edge) => {
          return(
            <div key={edge.node.slug}
              style={{
                display: `inline-block`,
                background: `#FFFFFF`,
                fontWeight: 600,
                lineHeight: 1.14,
                border: `solid 1px #EAECED`,
                paddingLeft: `15px`,
                paddingRight: `15px`,
                marginRight: `18px`,
                marginBottom: `30px`,
                paddingTop: `20px`,
              }}
            >
                <h3>{edge.node.title}</h3>
            </div>
          )}
         )}
    </>
    )
  }

export default Categories