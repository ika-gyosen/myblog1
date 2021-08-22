import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import "../../../node_modules/ress/"

import Footer from "../footer/Footer"

const Layout = ({ children }) => (
  <div css={siteWrapper}>
    <div css={headerWrapper}>
      <h1 css={titleStyle}>
        <Link to="/">MINAMI Beach</Link>
      </h1>
    </div>
    {children}
    <Footer />
  </div>
)

const siteWrapper = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 8% 5% 8%;
  align-items: center;
`

const headerWrapper = css`
  width: 100%;
  padding: 3%;
`

const titleStyle = css`
  justify-content: center;
  display: flex;
`
export default Layout
