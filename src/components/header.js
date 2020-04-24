// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle, home }) => {
  useEffect(() => {
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = 100;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  })
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      logodark: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      menus: allSanityMenu {
        edges {
          node {
            _key
            routes {
              _key
              title
              routes {
                slug {
                  current
                }
              }
            }
          }
        }
      }

    }
  `)

  return (  
    <nav id="navbar" className={`site-header fixed-top py-3 ${home ? '' : 'sub-page'}`}>
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="logo py-2" href="/" aria-label="Product">
          <Img fluid={data.logo.childImageSharp.fluid} />
        </a>
        <a className="logodark d-none py-2" href="/" aria-label="Product">
          <Img fluid={data.logodark.childImageSharp.fluid} />
        </a>
        <div className="d-flex justify-content-end align-items-center">
          {data.menus.edges[0].node.routes.map((q) => {
            return(
              <Link className="py-2 px-4 d-none d-md-inline-block" to={q.routes && q.routes.slug.current} > {q.title} </Link>
            )
          })}
          <Link className="py-2 px-5 d-none d-md-inline-block ml-4 btn btn-contact" to="contact">Kontakt</Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
