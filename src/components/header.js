import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import LazyLoad from 'react-lazyload'

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

  const [open, setOpen] = useState(false)
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

  const [page, setPage] = useState([])
  useEffect(() => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    setPage(page);
  }, [])
  return (
    <>
      <nav id="navbar" className={`site-header fixed-top py-1 py-md-4 ${navbarWhite ? '' : 'white'}`}>
        <div className="container d-flex flex-row flex-md-row justify-content-between">
          <LazyLoad>
            <a className="logo py-2" href="/" aria-label="Product">
              <img src={data.site.edges[0].node.logo.asset.fluid.src} alt="logo" />
            </a>
            <a className="logodark d-none py-2" href="/" aria-label="Product">
              <img src={data.site.edges[0].node.logoDark.asset.fluid.src} alt="logo" />
            </a>
          </LazyLoad>
          <div className="d-none d-md-flex justify-content-end align-items-center">
            {data.menus.edges[0].node.routes.map((q, i) => {
              return (
                <Link key={i}
                  className={`py-2 px-4 d-none d-xl-inline-block menu-link ${(q.routes.slug.current === page) ? 'active' : ''}`}
                  to={q.routes && q.routes.slug.current} >
                  {q.title}
                </Link>
              )
            })}
            <Link className="py-2 px-5 d-none d-xl-inline-block ml-4 btn btn-contact" to="contact">Kontakt</Link>
          </div>
          <button class="menu-button d-xl-none" onClick={() => setOpen(!open)} >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <nav class={open === true ? "menu" : "menu active"}>
        <button class="menu-close" onClick={() => setOpen(!open)} >×</button>
        <ul class="menu-box">
          {data.menus.edges[0].node.routes.map((q, i) => {
            return (
              <li><Link key={i} className="py-2 px-4 d-inline-block" to={q.routes && q.routes.slug.current} > {q.title} </Link></li>
            )
          })}
          <Link className="py-2 px-5 d-inline-block ml-4 btn btn-contact" to="kontakt">Kontakt</Link>
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
