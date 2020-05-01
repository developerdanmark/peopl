import React from 'react'
// import { Link } from "gatsby"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from './image';
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
                  linkedin
                  facebook
                  instagram
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
          <div className="col-md-3">
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
          <div className="col-6 col-md-3 mb-5 mb-md-0">
            {footerData.f2.edges.map((q, i) => {
              return (
                <>
                  <h5>{q.node.title}</h5>
                  <div className="social-icons">
                    <a href={q.node.linkedin} target="_blank" rel="noopener noreferrer">
                      <Img fluid={footerData.linkedinIcon.childImageSharp.fluid} className="linkedin-icon" />
                    </a>
                    <a href={q.node.facebook} target="_blank" rel="noopener noreferrer">
                      <Img fluid={footerData.facebookIcon.childImageSharp.fluid} className="facebook-icon" />
                    </a>
                    <a href={q.node.instagram} target="_blank" rel="noopener noreferrer">
                      <Img fluid={footerData.instagramIcon.childImageSharp.fluid} className="instagram-icon" />
                    </a>
                  </div>
                </>
              )
            })}

            <ul className="list-unstyled text-small">
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
          <div className="col-6 col-md-3 mb-5 mb-md-0">
            {footerData.f3.edges.map((q, i) => {
              return (
                <>
                  <h5>{q.node.title}</h5>
                  {q.node._rawText && <BlockContent blocks={q.node._rawText} />}
                </>
              )
            })}
          </div>
          <div className="col-md-3">
            <div id="map-container-google-1" class="z-depth-1-half map-container">
                <LazyLoad>
                {footerData.f4.edges.map((q, i) => {
                  let lat = Number(q.node.mapLat)
                  let lng = Number(q.node.mapLong)
                  let zoom = Number(q.node.zoom)
                  let key = q.node.key
                  return (
                    <>
                      <SimpleMap key={i} center={ {lat: lat , lng: lng }} zoom={zoom} apiKey={key} />
                    </>
                  )
                })}
                  
                </LazyLoad>
            </div>

          </div>
          <div className="col-md-12">
            <div className="logo-block mt-4">
              <Image />
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer