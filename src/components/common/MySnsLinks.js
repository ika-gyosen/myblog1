import * as React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

// fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

const MySnsLinks = () => (
  <>
    <a href="https://github.com/ika-gyosen">
      <FontAwesomeIcon css={iconStyle} icon={faGithub} />
    </a>
    <a href="https://twitter.com/dlsakai">
      <FontAwesomeIcon css={iconStyle} icon={faTwitter} />
    </a>
  </>
)

const iconStyle = css`
  margin: 0 0 0 20px;
  font-size: 30px;
  color: black;
`

export default MySnsLinks
