import * as React from "react"
import { css } from "@emotion/react"

import "../css/style.css"
import "../../node_modules/ress/"

// modules
import Layout from "../components/common/Layout"
import MySnsLinks from "../components/common/MySnsLinks"

const Prof = () => (
  <Layout>
    <div css={profStyle}>
      <h3>about</h3>
      <ul
        css={css`
          border-top: solid black 1px;
          padding: 15px 0 0 25px;
        `}
      >
        <li>名前: ダンボール太郎/Sakai</li>
        <li>出身: 神奈川県 相模原市</li>
        <li>誕生: 1992年</li>
        <li>興味: STM32/C・C++/JavaScript/Docker</li>
        <li>使ったことがある: PHP/Python/make/mongo/MySQL/Vue・Nuxt/React/Elasticsearch/Eagle</li>
      </ul>
      <p
        css={css`
          padding: 15px 0 0 5px;
        `}
      >
        ご指摘等ありましたらお気軽にご連絡ください。
      </p>
      <div css={snsStyle}>
        <MySnsLinks />
      </div>
    </div>
  </Layout>
)

const snsStyle = css`
  padding: 15px;
`

const profStyle = css`
  width: 80%;
  padding: 15px 0 0 10px;
  li {
    padding: 2px 0 2px 0;
  }
`

export default Prof
