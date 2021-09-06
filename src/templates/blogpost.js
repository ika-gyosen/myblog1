import React from "react"
import { css } from "@emotion/react"
import { format } from "date-fns"

// modules
import Layout from "../components/common/Layout"
import Markdown from "../components/common/Markdown"

export default props => {
  const { title, date, md_body } = props.pageContext

  return (
    <Layout>
      <div css={blogTitleWrapper}>
        <h1>{title}</h1>
        <p>{format(new Date(date), "yyyy年MM月dd日")}</p>
      </div>
      <Markdown html={md_body}></Markdown>
    </Layout>
  )
}

const blogTitleWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`
