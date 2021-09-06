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
      query blogQuery {
        allFile(sort: { fields: birthtime, order: DESC }) {
          nodes {
            changeTime
            birthTime
            sourceInstanceName
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
    `).then(result => {
      if (result.errors) {
        reject(() => {
          console.error("createPages Error!", result.errors)
          throw new Error("createPages Error")
        })
      }
      console.log("--- CreatePage Start --------------------", JSON.stringify(result, null, 4))
      let counter = 0
      const dupicateCheckList = new Set()
      result.data.allFile.nodes.forEach(item => {
        try {
          const { changeTime, birthTime, sourceInstanceName, childMarkdownRemark } = item
          if (childMarkdownRemark) {
            const {
              id,
              html,
              frontmatter: { title, description, slug, tags },
            } = childMarkdownRemark

            const pathresolve = path.resolve("./src/templates/blogpost.js")
            console.log(`=====documentType:${sourceInstanceName} id:${id} title:${title} slug:${slug} =====`)
            // 必須項目の存在チェック
            if (!title || !slug || !html) throw new Error(`Markdown file not comlited status`)
            // slugの重複チェック
            if (dupicateCheckList.has(sourceInstanceName + slug)) {
              console.error(`Markdown slug duplicate ->${sourceInstanceName + slug}`)
              throw new Error(`Markdown slug duplicate`)
            } else {
              dupicateCheckList.add(sourceInstanceName + slug)
            }
            createPage({
              path: `/${sourceInstanceName}/${slug}`,
              component: pathresolve,
              context: {
                title: title,
                md_body: html,
                slug: slug,
                date: birthTime,
                mod_date: changeTime,
                tags: tags,
                //   prev: prev,
                //   next: next,
              },
            })
          }
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

// const blogQuery = graphql`
//   query blogQuery {
//     allFile(filter: { sourceInstanceName: { eq: "blog" } }, sort: { fields: birthtime, order: DESC }) {
//       nodes {
//         changeTime
//         birthTime
//         childMarkdownRemark {
//           id
//           frontmatter {
//             title
//             description
//             slug
//             tags
//           }
//           html
//         }
//       }
//     }
//   }
// `
