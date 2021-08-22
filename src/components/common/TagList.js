import React from "react"
import { css } from "@emotion/react"
// import { Link } from "gatsby"
// import { format } from "date-fns"

const TagList = ({ tags }) => {
  //   console.log("TagList", tag)
  const tagList = tags ? tags.split(",") : []

  return (
    <ul css={tagWrapper}>
      {tagList.map((tag, index) => (
        <li css={index === 0 ? firstTagStyle : tagStyle} key={`${tag}_${index}`}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

const tagWrapper = css`
  font-size: 12px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: start;
`

const firstTagStyle = css`
  border-radius: 8px; 
  margin : 3px; 0 0 3px;
  padding: 2px 4px 2px 4px;
  background-color:black;
  color: white;
`
//// background-color: #e3655f;
const tagStyle = css`
border-radius: 8px; 
margin : 3px; 0 0 3px;
padding: 2px 4px 2px 4px;
background-color: darkgray;
color: white;
`
// background-color: #1c9aa0;

export default TagList
