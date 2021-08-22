import * as React from "react"
import { css } from "@emotion/react"

import "../css/style.css"
import "../../node_modules/ress/"

// modules
import Layout from "../components/common/Layout"

const Tools = () => (
  <Layout>
    <div css={pageStyle}>
      <h3>ツール</h3>
    </div>
  </Layout>
)

const pageStyle = css`
  padding: 15px 0 0 10px;
  li {
    padding: 2px 0 2px 0;
  }
`

export default Tools
