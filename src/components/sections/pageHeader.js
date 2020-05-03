import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import LazyLoad from "react-lazyload"

const PageHeader = ({ data }) => {
  const images = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg-image.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
            }
        }
      },
      badge1: file(relativePath: { eq: "badge-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      badge2: file(relativePath: { eq: "badge-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      badge3: file(relativePath: { eq: "badge-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      badge4: file(relativePath: { eq: "badge-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  const bg = data.bgImage.asset.fluid.src
  return (
    <div className="position-relative banner overflow-hidden bg-light" style={{ background: `url(${bg})`, backgroundSize: 'cover' }}>
      <div className="container">
          <div className="breadcrumb mt-4"><Link to="/" >Forside</Link> >&nbsp; <Link to="/ydelser">Ydelser</Link> >&nbsp; {data.title}  </div>
        <div className="row banner-content">
          <div className="col-xl-7 col-lg-6 mx-auto my-5 py-4 py-md-0 d-flex flex-column justify-content-start align-items-start">
            <div className="tag"> {data.tag} </div>
            <LazyLoad>
              <div className="banner-title"> 
                <div className="title-icon"> <img src={data.icon.asset.fluid.src} alt={data.title} /> </div>
                {data.title}
              </div>
            </LazyLoad>
            <div className="banner-body">
              {data._rawBody && <BlockContent blocks={data._rawBody} />}
            </div>
            <div className="logo-block mt-4">
              <div className="badge-1"><Img fluid={images.badge1.childImageSharp.fluid} /></div>
              <div className="badge-2"><Img fluid={images.badge2.childImageSharp.fluid} /></div>
              <div className="badge-3"><Img fluid={images.badge3.childImageSharp.fluid} /></div>
              <div className="badge-4"><Img fluid={images.badge4.childImageSharp.fluid} /></div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 d-flex justify-content-center">
            <div className="banner-form">
              <div className="form-title">
                Skal vi også vækste <br /> din virksomhed?
                            </div>
              <div className="form-subtitle">
                Lad os invitere dig ind til et <br /> uforpligtende møde
                            </div>
              <div className="form-group">
                <label htmlFor="name">Navn</label>
                <input type="text" className="form-control" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input type="tel" className="form-control" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
              </div>
              <button type="submit" className="btn btn-banner-form">Bliv kontaktet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader