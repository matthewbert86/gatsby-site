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
      file(relativePath: {eq: "hero-img.png"}) {
        childImageSharp {
          fluid {
             ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Hero = () => {
  return <h2>hero component</h2>
}

export default Hero
