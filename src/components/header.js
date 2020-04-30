import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import MobileMenu from './mobileMenu';

const Header = ({ siteTitle, navbarWhite }) => {
  useEffect(() => {
    window.onscroll = function () { myFunction() };

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

  const [ open, setOpen ] = useState(false)
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  const data = useStaticQuery(graphql`
    {
      site: allSanitySiteSettings {
        edges {
          node {
            _id
            _type
            logo {
              asset {
                fluid(maxWidth: 200) {
                  ...GatsbySanityImageFluid
                  src
                }
              }
            }
            logoDark {
              asset {
                fluid(maxWidth: 200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
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
    <>
      <nav id="navbar" className={`site-header fixed-top py-3 ${navbarWhite ? '' : 'white'}`}>
        <div className="container d-flex flex-row flex-md-row justify-content-between">
          <a className="logo py-2" href="/" aria-label="Product">
          {/* <code>
            {JSON.stringify(data.site.edges[0].node.logo)}
          </code> */}
            <Img fluid={data.site.edges[0].node.logo.asset.fluid} />
          </a>
          <a className="logodark d-none py-2" href="/" aria-label="Product">
            <Img fluid={data.site.edges[0].node.logoDark.asset.fluid} />
          </a>
          <div className="d-flex justify-content-end align-items-center">
            {data.menus.edges[0].node.routes.map((q, i) => {
              return (
                <Link key={i} className="py-2 px-4 d-none d-md-inline-block" to={q.routes && q.routes.slug.current} > {q.title} </Link>
              )
            })}
            <Link className="py-2 px-5 d-none d-md-inline-block ml-4 btn btn-contact" to="contact">Kontakt</Link>
          </div>
          <Link to="#" class="menu-button d-md-none" onClick={ () => setOpen(!open) } >
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </div>
      </nav>
        <nav class={open === true ? "menu" : "menu active"}>
          <Link to="#" class="menu-close" onClick={ () => setOpen(!open) } >×</Link>
          <ul class="menu-box">
            {data.menus.edges[0].node.routes.map((q, i) => {
              return (
                <li><Link key={i} className="py-2 px-4 d-inline-block" to={q.routes && q.routes.slug.current} > {q.title} </Link></li>
              )
            })}
            <Link className="py-2 px-5 d-inline-block ml-4 btn btn-contact" to="contact">Kontakt</Link>
          </ul>
        </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
