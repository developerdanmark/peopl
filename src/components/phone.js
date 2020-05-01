import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

const Phone = () => {
    const data = useStaticQuery(graphql`
    {
      tel: allSanityContact {
        edges {
          node {
            phone
          }
        }
      }
      phone: file(relativePath: { eq: "tel.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },

    }
  `)
    return(
        <div className="float-phone">
           <a href={`tel:+${data.tel.edges[0].node.phone}`}> <Img fluid={data.phone.childImageSharp.fluid} /> </a>
        </div>
    )
}

export default Phone