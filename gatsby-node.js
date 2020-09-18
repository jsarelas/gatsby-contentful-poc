/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

module.exports.createPages =  async ({graphql, actions}) => {
    const { createPage } = actions
    
    //FAQS create all pages
    const faqTemplate = path.resolve('./src/templates/faq.js')
    const faqs = await graphql(`
    query { allContentfulFaQs {
        edges { 
          node {
            id
            
            }
          }
        }
      }
    `)

    faqs.data.allContentfulFaQs.edges.forEach((edge) => {
        createPage({
            component: faqTemplate,
            path: `/faq/${edge.node.id}`,
            context: {
                id: edge.node.id
            }
        })
    })

    // ARTICLES create all pages
    const articleTemplate = path.resolve('./src/templates/article.js')
    const articles = await graphql(`
    query { allContentfulArticle {
      edges { 
      node{
        slug
        }
      }
      }
    }
    `)

    articles.data.allContentfulArticle.edges.forEach((edge) => {
        createPage({
            component: articleTemplate,
            path: `/article/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}