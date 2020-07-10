import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>This page both exists and does not exist at the same time. Feel free to stay here and think on that for a while, or click the button below to get outta here!</h1>
          <Link to="/" className="btn">
            E.T. Phone Home!
        </Link>
        </div>
      </main>
    </Layout>
    
  )
}

export default Error
