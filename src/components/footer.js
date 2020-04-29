import React from 'react'
// import { Link } from "gatsby"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from './image';

const Footer = ({data}) => {

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
                  mapLong
                  mapLat
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
            <footer className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h5> {footerData.f1.edges.map((q, i) => {
                            return( q.node.title)
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
                    <div className="col-md-3">
                        <h5>Følg os</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className="text-muted" to="#">Sitemap</Link></li>
                            <li><Link className="text-muted" to="#">Job</Link></li>
                            <li><Link className="text-muted" to="#">Privatlivspolitik</Link></li>
                            <li><Link className="text-muted" to="#">Betingelser</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Peopl A/S</h5>
                        <p>
                            Ny Carlsbergvej 80 <br />
                            1760 København V
                        </p>
                        <p>
                            Telefon:  +45 28 87 57 00 <br />
                            Mail:  info@peopl.dk <br />
                            CVR: 37995193
                        </p>
                    </div>
                    <div className="col-md-12">
                        <div className="logo-block mt-4">
                            <Image />
                            {/* <div className="badge-1"><Img fluid={images.badge1.childImageSharp.fluid} /></div>
                            <div className="badge-2"><Img fluid={images.badge2.childImageSharp.fluid} /></div>
                            <div className="badge-3"><Img fluid={images.badge3.childImageSharp.fluid} /></div>
                            <div className="badge-4"><Img fluid={images.badge4.childImageSharp.fluid} /></div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer