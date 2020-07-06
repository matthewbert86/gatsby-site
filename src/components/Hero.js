import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

// step 1 to get the graphql set up below, I had to go to graphql, click on file, relativePath, eq (and type image file name next to it), childImageSharp, and src.
// step 2 - I went to code exporter in graphql, selected StaticQuery hook, and copied graphql and everything between ``
const query = graphql`
    {
      file(relativePath: {eq: "matt.jpg"}) {
        childImageSharp {
          fluid {
             ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Matthew Bert</h1>
            <h4>freelance Web & App Developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero