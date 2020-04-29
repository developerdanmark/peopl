import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
  const bg = data.bgImage.asset.fluid.srcWebp
    return (
        <div className="position-relative banner py-5 overflow-hidden bg-light" style={{ background: `url(${bg})`, backgroundSize: 'cover' }}>
            {/* <div className="banner-bg"><Img fluid={images.bg.childImageSharp.fluid} /></div> */}
            <div className="container">
                <div className="row banner-content">
                    <div className="col-md-7 mx-auto my-5 d-none d-md-flex flex-column justify-content-start align-items-start">
                        <div className="banner-title">Vi skaber målbare resultater for din forretning</div>
                        <div className="text-line">
                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M40 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" /></svg>
                          Gennem personlige relationer, der tager afsæt i dit behov her og nu.
                        </div>
                        <div className="text-line">
                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M40 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" /></svg>
                          Specialister og certificeret i SEO og annoncering
                        </div>
                        <div className="text-line">
                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M40 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" /></svg>
                          Effektiviserer din drift gennem automatisering
                        </div>
                        <div className="logo-block mt-4">
                            <div className="badge-1"><Img fluid={images.badge1.childImageSharp.fluid} /></div>
                            <div className="badge-2"><Img fluid={images.badge2.childImageSharp.fluid} /></div>
                            <div className="badge-3"><Img fluid={images.badge3.childImageSharp.fluid} /></div>
                            <div className="badge-4"><Img fluid={images.badge4.childImageSharp.fluid} /></div>
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
    )
}

export default HomeHeader