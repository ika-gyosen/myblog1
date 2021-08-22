import React from "react"
import { css } from "@emotion/react"
import { format } from "date-fns"

// modules
import Layout from "../components/common/Layout"

export default props => {
  const { title, date, md_body } = props.pageContext

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <p>{format(new Date(date), "yyyy年MM月dd日")}</p>
      </div>
      <div css={contentsWrapper} dangerouslySetInnerHTML={{ __html: md_body }}></div>
      {/* <pre>resulblogpost{JSON.stringify(props, null, 4)}</pre> */}
    </Layout>
  )
}

const contentsWrapper = css`
  width: 80%;
`
