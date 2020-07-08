import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({data}) => {
  const {allStrapiProjects:{nodes:projects},
} = data

  return (
    <Layout>
      <Hero />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showLink/>
    </Layout>
  ) 
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
 
