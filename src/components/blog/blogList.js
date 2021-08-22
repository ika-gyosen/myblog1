import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { format } from "date-fns"

// modules
import TagList from "../common/TagList"

export default ({ data }) => {
  console.log("blogs", data)

  return (
    <div css={blogListWrapper}>
      <ul>
        {data.allFile.nodes.map(post => {
          const {
            changeTime,
            birthTime,
            childMarkdownRemark: {
              id,
              frontmatter: { title, description, slag, tags },
            },
          } = post

          return (
            <li key={id} css={blogCardWrapper}>
              <div css={blogInfoWrapper}>
                <p css={blogDateStyle}>{format(new Date(birthTime), "yyyy年MM月dd日")}</p>
                <TagList tags={tags} />
              </div>
              <div css={blogLinkStyle}>
                <Link to={`./${id}/`}>
                  <h2>{title}</h2>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const blogListWrapper = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ul {
    list-style-type: none;
  }
`

const blogInfoWrapper = css`
  display: flex;
  flex-direction: row;
`

const blogDateStyle = css`
  padding: 0 10px 0 10px;
`

const blogCardWrapper = css`
  padding: 5px;
  width: 150%;
  margin: 8px 0 0 0;
`

const blogLinkStyle = css`
  padding: 0 0 0 25px;
`
