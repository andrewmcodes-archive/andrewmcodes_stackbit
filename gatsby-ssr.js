/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const safePrefix = require("./src/utils/safePrefix").default

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([])

  setPostBodyComponents([
    <React.Fragment>
      <script src={safePrefix("assets/js/plugins.js")} />
      <script src={safePrefix('assets/js/prism.js')} data-manual/>
      <script src={safePrefix("assets/js/main.js")} />
    </React.Fragment>,
  ])
}
