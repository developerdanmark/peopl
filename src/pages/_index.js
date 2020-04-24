import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
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
      kunde1: file(relativePath: { eq: "kunde-logo1.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kunde2: file(relativePath: { eq: "kunde-logo2.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kunde3: file(relativePath: { eq: "kunde-logo3.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kunde4: file(relativePath: { eq: "kunde-logo4.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kunde5: file(relativePath: { eq: "kunde-logo5.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kunde6: file(relativePath: { eq: "kunde-logo6.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      google: file(relativePath: { eq: "google.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      seo: file(relativePath: { eq: "seo.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      amazon: file(relativePath: { eq: "amazon.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      mail: file(relativePath: { eq: "mail.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      code: file(relativePath: { eq: "code.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      trustpilot: file(relativePath: { eq: "trustpilot.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <div className="position-relative banner py-5 overflow-hidden bg-light">
        <div className="container">
          <div className="row banner-content">
            <div className="col-md-7 mx-auto my-5 d-flex flex-column justify-content-start align-items-start">
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
              <div className="logo-block">
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
                  <label for="name">Navn</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label for="phone">Telefon</label>
                  <input type="tel" className="form-control" id="phone" />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-banner-form">Bliv kontaktet</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ########### Brands block ########### */}
      <div className="logo-block-full">
        <div className="container">
          <div className="logos mx-auto">
            <div className="kunde"><Img fluid={images.kunde1.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde2.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde3.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde4.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde5.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde6.childImageSharp.fluid} /></div>
          </div>
        </div>
      </div>

      {/* ########### Video Block ########### */}

      <div className="video-block py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="video-block-content mx-auto">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
                <div className="video-title">
                  245% stigning fra SEO
                </div>
                <p className="video-description mx-auto">
                  Lorem ipsum dolor sit amet, lorem sed commodo potenti, in rutrum nisl diam ac, at platea elit rutrum. Lorem ipsum dolor sit amet, lorem sed commodo potenti, in rutrum nisl diam ac, at platea elit rutrum
                </p>
                <button type="button" className="btn btn-outline-secondary video-button">Læs case</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ########### Services Block ########### */}

      <div className="services-block py-5">
        <div className="container py-5">
          <div className="row services-desc">
            <div className="title h1">Vi er med hele vejen</div>
            <div className="description">
              <p>Alle virksomheder har forskellige behov. Vi har samlet de kompetencer vi mener kan hjælpe med vækstrejsen.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row icon-cards pb-5">
            <div className="col-md-4 p-0">
              <div className="icon-card">
                <div className="icon-image facebook">
                  <Img fluid={images.facebook.childImageSharp.fluid} />
                </div>
                <div className="icon-title">Facebook Ads</div>
                <p className="icon-description">Lorem ipsum dolor sit amet, lorem sed commodo potenti, in rutrum nisl diamac…</p>
                <div className="icon-readmore">Læs mere</div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="icon-card">
                <div className="icon-image google">
                  <Img fluid={images.google.childImageSharp.fluid} />
                </div>
                <div className="icon-title">Google Ads</div>
                <p className="icon-description">Lorem ipsum dolor sit amet, lorem sed commodo potenti, in rutrum nisl diamac…</p>
                <div className="icon-readmore">Læs mere</div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="icon-card">
                <div className="icon-image seo">
                  <Img fluid={images.seo.childImageSharp.fluid} />
                </div>
                <div className="icon-title">SEO</div>
                <p className="icon-description">Lorem ipsum dolor sit amet, lorem sed commodo potenti, in rutrum nisl diamac…</p>
                <div className="icon-readmore">Læs mere</div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="icon-card">
                <div className="icon-image amazon">
                  <Img fluid={images.amazon.childImageSharp.fluid} />
                </div>
                <div className="icon-title">Amazon</div>
                <p className="icon-description">Lorem ipsum dolor sit amet, lorem sed commodo potenti, in rutrum nisl diamac…</p>
                <div className="icon-readmore">Læs mere</div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="icon-card">
                <div className="icon-image mail">
                  <Img fluid={images.mail.childImageSharp.fluid} />
                </div>
                <div className="icon-title">Email marketing</div>
                <p className="icon-description">Lorem ipsum dolor sit amet, lorem sed commodo potenti, in rutrum nisl diamac…</p>
                <div className="icon-readmore">Læs mere</div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="icon-card">
                <div className="icon-image code">
                  <Img fluid={images.code.childImageSharp.fluid} />
                </div>
                <div className="icon-title">Udvikling</div>
                <p className="icon-description">Lorem ipsum dolor sit amet, lorem sed commodo potenti, in rutrum nisl diamac…</p>
                <div className="icon-readmore">Læs mere</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ########### Color Block ########### */}

      <div className="color-block py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="trustpilot-image"><Img fluid={images.trustpilot.childImageSharp.fluid} /></div>
            </div>
            <div className="col-md-6">
              <p>
                “Jeg kan varmt anbefale Peopl, og jeg har selv brugt ham flere gange. Han er enormt detaljeorienteret, virkelig kreativ og innovativ tænkende. 5 stjerner herfra :)”
                <span>Mette Maria T, virksomhed</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ########### References Block ########### */}

      <div className="videocard-block py-5">
        <div className="container">
          <div className="row py-5">
            <div class="card-deck">
              <div class="card overflow-hidden">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <div className="kunde"><Img fluid={images.kunde2.childImageSharp.fluid} /></div>
                  <h5 class="card-title">Medicsport</h5>
                  <p class="card-text">“Lorem ipsum dolor sit amet, lorem sed commodo potenti, dolor sit amet, lorem sed commodo potenti, in rutrum nisl diam”</p>
                </div>
                <div className="footer">
                  <button type="button" className="btn btn-outline-secondary card-button">Se case</button>
                </div>
              </div>
              <div class="card overflow-hidden">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <div className="kunde"><Img fluid={images.kunde4.childImageSharp.fluid} /></div>
                  <h5 class="card-title">Odense Congress Center</h5>
                  <p class="card-text">“Lorem ipsum dolor sit amet, lorem sed commodo potenti, dolor sit amet, lorem sed commodo potenti, in rutrum nisl diam”</p>
                </div>
                <div className="footer">
                  <button type="button" className="btn btn-outline-secondary card-button">Se case</button>
                </div>
              </div>
              <div class="card overflow-hidden">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                  <div className="kunde"><Img fluid={images.kunde6.childImageSharp.fluid} /></div>
                  <h5 class="card-title">Fitnessbutikken</h5>
                  <p class="card-text">“Lorem ipsum dolor sit amet, lorem sed commodo potenti, dolor sit amet, lorem sed commodo potenti, in rutrum nisl diam”</p>
                </div>
                <div className="footer">
                  <button type="button" className="btn btn-outline-secondary card-button">Se case</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ########### Logo block ########### */}
      <div className="logo-block-full">
        <div className="container">
          <div className="logos mx-auto">
            <div className="kunde"><Img fluid={images.kunde1.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde2.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde3.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde4.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde5.childImageSharp.fluid} /></div>
            <div className="kunde"><Img fluid={images.kunde6.childImageSharp.fluid} /></div>
          </div>
        </div>
      </div>

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
            <div class="form-group col-md-3">
              <label for="i-name">Navn</label>
              <input type="text" id="i-name" class="form-control" />
            </div>
            <div class="form-group col-md-3">
              <label for="i-phone">Telefon</label>
              <input type="tel" id="i-phone" class="form-control" />
            </div>
            <div class="form-group col-md-3">
              <label for="i-email">Email</label>
              <input type="email" id="i-email" class="form-control" />
            </div>
            <div class="form-group col-md-3">
              <label for="name">&nbsp;</label>
              <input type="submit" id="name" class="form-control" value="Kontakt mig" />
            </div>
          </div>
        </div>
      </div>

      <footer className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h5>Ydelser og viden</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Blog</a></li>
              <li><a className="text-muted" href="#">Facebook Ads</a></li>
              <li><a className="text-muted" href="#">Google Ads</a></li>
              <li><a className="text-muted" href="#">Seo</a></li>
              <li><a className="text-muted" href="#">E-mail marketing</a></li>
              <li><a className="text-muted" href="#">Amazon</a></li>
              <li><a className="text-muted" href="#">Udvikling</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Følg os</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Sitemap</a></li>
              <li><a className="text-muted" href="#">Job</a></li>
              <li><a className="text-muted" href="#">Privatlivspolitik</a></li>
              <li><a className="text-muted" href="#">Betingelser</a></li>
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
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage
