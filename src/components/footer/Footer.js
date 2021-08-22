import * as React from "react"
import { css } from "@emotion/react"

const Footer = () => (
  <div css={footerStyle}>
    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
      <img
        alt="クリエイティブ・コモンズ・ライセンス"
        css={css`
          border-width: 0;
        `}
        src="https://i.creativecommons.org/l/by/4.0/88x31.png"
      />
    </a>
    <br />
    この 作品 は{" "}
    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
      クリエイティブ・コモンズ 表示 4.0 国際 ライセンス
    </a>
    の下に提供されています。
  </div>
)

const footerStyle = css`
  width: 80%;
  margin: 25px 0 0 0;
  padding: 15px 3% 0 3%;
  border-top: solid black 1px;
`

export default Footer
