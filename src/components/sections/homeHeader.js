import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LazyLoad from "react-lazyload"

const HomeHeader = ({ data }) => {
  const images = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg-image.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
            }
        }
      },
      badge: file(relativePath: { eq: "home-header-logos.png" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      check: file(relativePath: { eq: "paraf.png" }) {
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
    <LazyLoad>
      <div className="position-relative banner overflow-hidden bg-light" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
        {/* <div className="banner-bg"><img src={images.bg.childImageSharp.fluid.base64} /></div> */}
        <div className="container">
          <div className="row banner-content">
            <div className="col-md-7 mx-auto my-5 d-flex flex-column justify-content-start align-items-start">
              <div className="banner-title">{data.title}</div>
              <div className="text-line">
                <div className="check"><Img fluid={images.check.childImageSharp.fluid} alt="check" /></div>
                {data.list1}
              </div>
              <div className="text-line">
                <div className="check"><Img fluid={images.check.childImageSharp.fluid} alt="check" /></div>
                {data.list2}
              </div>
              <div className="text-line">
                <div className="check"><Img fluid={images.check.childImageSharp.fluid} alt="check" /></div>
                {data.list3}
              </div>
              <div className="logo-block mt-4">
                <div className="badge"><img src={data.badge.asset.fluid.src} alt="badge" /></div>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
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
    </LazyLoad>
  )
}

export default HomeHeader