import React from "react"
import { css } from "@emotion/react"
const Markdown = ({ html }) => {
  //   console.log("Markdown", Markdown)

  return <div css={contentsWrapper} className="markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
}

const contentsWrapper = css`
  width: 80%;

  h1 {
    font-size: 1.5em;
    border-bottom: #777 solid 1px;
    padding: 5px 0 0 15px;
    margin: 4px;
  }
  h2 {
    padding: 5px 0 0 15px;
    font-size: 1.33em;
  }
  h3 {
    padding: 5px 0 0 15px;
    font-size: 1.17em;
  }

  h3,
  h4,
  h5,
  h6 {
    padding: 5px 0 0 15px;
  }
  p,
  ul,
  ol {
    padding: 0 0 0 25px;
  }

  .gatsby-highlight {
    width: 80%;
    margin: 0 10px 10px 10px;
  }

  .gatsby-code-title {
    margin-top: 8px;

    font-size: 13px;
  }

  .gatsby-code-title span {
    color: #eee;
    background: #777;
    border-radius: 5px;
    padding: 4px;
  }

  .gatsby-code-button-container {
    position: relative;
    top: 0;
    color: white;
  }
  .gatsby-code-button-icon {
    display: none;
  }
  .gatsby-code-button {
    position: absolute;
    top: 20px;
    right: 20%;
    z-index: 100;
    padding: 2px 4px 2px 4px;
    border: solid white 1px;
    border-radius: 8px;
    font-size: 13px;
  }
`

export default Markdown
