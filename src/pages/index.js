import React from "react"
import App from "./App"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <App />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
