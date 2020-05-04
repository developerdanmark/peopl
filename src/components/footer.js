import React from 'react'
// import { Link } from "gatsby"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Image from './image';
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import LazyLoad from 'react-lazyload';
import SimpleMap from './simpleMap';


const Footer = ({ data }) => {

  const footerData = useStaticQuery(
    graphql`
          query {
            f1: allSanityFooterBlock1 {
              edges {
                node {
                  _key
                  _type
                  title
                  link {
                    _id
                    title
                    slug {
                      current
                    }
                  }
                }
              }
            }
            f2: allSanityFooterBlock2 {
              edges {
                node {
                  _id
                  _type
                  title
                  social {
                    _type
                    title
                    link
                    icon {
                      asset {
                        fluid {
                          src
                          srcWebp
                        }
                      }
                    }
                  }
                  link {
                    title
                    slug {
                      current
                    }
                  }
                }
              }
            }
            f3: allSanityFooterBlock3 {
              edges {
                node {
                  _id
                  _type
                  title
                  _rawText
                }
              }
            }
            f4: allSanityFooterBlock4 {
              edges {
                node {
                  _id
                  _type
                  title
                  key
                  mapLong
                  mapLat
                  zoom
                  badge {
                    asset {
                      fluid {
                        src
                        srcWebp
                      }
                    }
                  }
                }
              }
            }
            f5: allSanityFooterForm {
              edges {
                node {
                  _id
                  _type
                  title
                  description
                }
              }
            }
            facebookIcon: file(relativePath: { eq: "facebookIcon.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
                  }
              }
            }
            linkedinIcon: file(relativePath: { eq: "linkedinIcon.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
                  }
              }
            }
            instagramIcon: file(relativePath: { eq: "instagramIcon.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
                  }
              }
            }

          }
        `
  )

  return (
    <>
      {/* ########### Color Block Footer Form ########### */}

      <div className="color-block py-5">
        <div className="container">
          <div className="row">
            <div className="header text-center mx-auto">
              <div className="inline-form-title">Vi har sat kaffen over</div>
              <p className="inline-form-subtitle">til en uforpligtende snak omkring hvad vi kan tilbyde dig</p>
            </div>
          </div>
          <div className="row form-row inline-from py-5">
            <div className="form-group col-md-3">
              <label htmlFor="i-name">Navn</label>
              <input type="text" id="i-name" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="i-phone">Telefon</label>
              <input type="tel" id="i-phone" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="i-email">Email</label>
              <input type="email" id="i-email" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="name">&nbsp;</label>
              <input type="submit" id="name" className="form-control" value="Kontakt mig" />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-6 col-md-3 order-1">
              <h5> {footerData.f1.edges.map((q, i) => {
                return (q.node.title)
              })} </h5>

              <ul className="list-unstyled text-small">
                {footerData.f1.edges.map((q, i) => {
                  return (
                    q.node.link.map((n, i) => {
                      return (
                        <li><Link className="text-muted" to={n.slug.current}> {n.title} </Link></li>
                      )
                    })
                  )
                })}
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-5 mb-md-0 d-flex flex-nowrap flex-column order-2">
              <div className="order-2 order-md-1">
                <h5 className="d-none d-md-block">{footerData.f2.edges[0].node.title}</h5>
                {/* {JSON.stringify(footerData.f2.edges[0].node.social)} */}
                <div className="social-icons d-none d-md-flex">
                  {footerData.f2.edges[0].node.social.map((q, i) => {
                    return (
                      <a href={q.link} target="_blank" rel="noopener noreferrer">
                        <Img fluid={q.icon.asset.fluid} alt={q.title} className="social-icon" />
                      </a>
                    )
                  })}
                </div>
              </div>

              <ul className="list-unstyled text-small order-1 order-md-2">
                <li><a className="text-muted" href="/sitemap.xml" target="_blank" rel="noopener noreferrer" >Sitemap</a></li>
                {footerData.f2.edges.map((q, i) => {
                  return (
                    q.node.link.map((n, i) => {
                      return (
                        <li><Link className="text-muted" to={n.slug.current}> {n.title} </Link></li>
                      )
                    })
                  )
                })}
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-md-0 order-3">
              {footerData.f3.edges.map((q, i) => {
                return (
                  <>
                    <h5>{q.node.title}</h5>
                    {q.node._rawText && <BlockContent blocks={q.node._rawText} />}
                  </>
                )
              })}
              <h5 className="d-block d-md-none">{footerData.f2.edges[0].node.title}</h5>
              <div className="social-icons d-flex d-md-none">
                {footerData.f2.edges[0].node.social.map((q, i) => {
                  return (
                    <a href={q.link} target="_blank" rel="noopener noreferrer">
                      <Img fluid={q.icon.asset.fluid} alt={q.title} className="social-icon" />
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="col-12 col-xl-3 order-5 order-xl-4 col-map">
              <div id="map-container-google-1" class="z-depth-1-half map-container">
                <LazyLoad>
                  {footerData.f4.edges.map((q, i) => {
                    let lat = Number(q.node.mapLat)
                    let lng = Number(q.node.mapLong)
                    let zoom = Number(q.node.zoom)
                    let key = q.node.key
                    return (
                      <>
                        <SimpleMap key={i} center={{ lat: lat, lng: lng }} zoom={zoom} apiKey={key} />
                      </>
                    )
                  })}

                </LazyLoad>
              </div>

            </div>
            <div className="col-md-12 order-4 order-xl-5">
              <div className="logo-block mt-4">
                <div className="footerbadges"><img src={footerData.f4.edges[0].node.badge.asset.fluid.src} alt="badge" /></div>
                {/* <Image /> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer