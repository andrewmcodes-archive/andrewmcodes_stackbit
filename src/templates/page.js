import React from "react"
import _ from "lodash"

import { Layout } from "../components/index"
import { htmlToReact, safePrefix } from "../utils"

export default class Page extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner">
            <article className="post page post-full">
              <header className="post-header inner-small">
                <h1 className="post-title line-top">
                  {_.get(this.props, "pageContext.frontmatter.title")}
                </h1>
                {_.get(this.props, "pageContext.frontmatter.subtitle") && (
                  <div className="post-subtitle">
                    {htmlToReact(
                      _.get(this.props, "pageContext.frontmatter.subtitle")
                    )}
                  </div>
                )}
              </header>
              {_.get(this.props, "pageContext.frontmatter.img_path") && (
                <div className="post-thumbnail">
                  <img
                    src={safePrefix(
                      _.get(this.props, "pageContext.frontmatter.img_path")
                    )}
                    alt={_.get(this.props, "pageContext.frontmatter.title")}
                  />
                </div>
              )}
              <div className="post-content inner-small">
                {htmlToReact(_.get(this.props, "pageContext.html"))}
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}
