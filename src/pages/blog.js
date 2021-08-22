import * as React from "react"
import { css } from "@emotion/react"
import { graphql } from "gatsby"

import "../css/style.css"
import "../../node_modules/ress/"

// modules
import Layout from "../components/common/Layout"
import BlogList from "../components/blog/blogList"

const Blog = ({ data }) => (
  <Layout>
    <div css={blogTitleWrapper}>
      <h3>ブログ</h3>
    </div>
    <div css={blogWrapper}>
      <BlogList data={data} />
    </div>
  </Layout>
)

export default Blog

const blogTitleWrapper = css`
  width: 80%;
  padding: 0 0 25px 0;
  border-bottom: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const blogWrapper = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const query = graphql`
  query MyQuery {
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
