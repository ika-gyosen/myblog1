import * as React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../css/style.css"

// image
import seaImage from "../images/sea.jpg"

// modules
import Footer from "../components/footer/Footer"
import MySnsLinks from "../components/common/MySnsLinks"

const IndexPage = () => (
  <div css={siteWrapper}>
    <div css={contentsWrapper}>
      <div css={sideWrapper}>
        <img css={imageStyle} src={seaImage} alt="top" />
      </div>
      <div css={mainWrapper}>
        <div css={siteTitleWrapper}>
          <h1 css={siteTitleStyle}>MINAMI Beach</h1>
          <p>マイコンとソフトウェア開発のメモ</p>
        </div>
        <ul css={menuWrapper}>
          <li>
            <Link to="/prof">プロフィール</Link>
          </li>
          <li>
            <Link to="/blog">ブログ</Link>
          </li>
          <li>
            <Link to="/articles">記事</Link>
          </li>
          <li>
            <Link to="/tools">ツール</Link>
          </li>
        </ul>
        <div>
          <MySnsLinks />
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

const siteWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 5% 0 0 0;
`

const contentsWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const sideWrapper = css`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 60%;
`

const mainWrapper = css`
  display: flex;
  width: 40%;
  height: 80%;
  flex-direction: column;
  padding-left: 20px;
`
const imageStyle = css`
  height: 100%;
  width: 100%;
`

const siteTitleWrapper = css`
  padding: 0 0 10% 0;
`

const siteTitleStyle = css`
  color: #6597d1;
  padding: 10px 0 15px 0;
`

const menuWrapper = css`
  padding: 0 0 40px 25px;
`

export default IndexPage
