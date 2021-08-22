/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allMarkdownRemark {
          nodes {
            html
            id
            frontmatter {
              date
              description
              modifieddate
              title
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(() => {
          console.error("createPages Error!", result.errors)
          throw new Error("createPages Error")
        })
      }
      console.log("--- CreatePage Start --------------------", JSON.stringify(result, null, 4))
      let counter = 0
      result.data.allMarkdownRemark.nodes.forEach(item => {
        const md_body = item.html
        const pathresolve = path.resolve("./src/templates/blogpost.js")
        console.log(`==== `, item.frontmatter.title, ` ====`)
        // const prev =
        //   typeof result.data.allContentfulBlogPost.edges[counter - 1] ===
        //   "undefined"
        //     ? 0
        //     : result.data.allContentfulBlogPost.edges[counter - 1].node.slug;

        // const next =
        //   typeof result.data.allContentfulBlogPost.edges[counter + 1] ===
        //   "undefined"
        //     ? 0
        //     : result.data.allContentfulBlogPost.edges[counter + 1].node.slug;
        // console.log(node.title, md_body, node.updatedAt, prev, prev);
        // console.log(`slug`, `/blogpost/${node.slug}`);
        try {
          createPage({
            path: `/blog/${item.id}`,
            component: pathresolve,
            context: {
              title: item.frontmatter.title,
              md_body: md_body,
              slug: item.id,
              date: item.frontmatter.date,
              //   prev: prev,
              //   next: next,
            },
          })
        } catch (e) {
          console.error(e)
          throw new Error("blog post gen Error")
        }
        counter++
        console.log(`page create counter ${counter}`)
      })
      console.log("--- CreatePage END --------------------")
      resolve()
    })
  })
}

const blogQuery = graphql`
  query blogQuery {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }, sort: { fields: birthtime, order: DESC }) {
      nodes {
        changeTime
        birthTime
        childMarkdownRemark {
          id
          frontmatter {
            title
            description
            slug
            tags
          }
          html
        }
      }
    }
  }
`
