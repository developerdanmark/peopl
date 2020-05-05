import React from "react"
import { Link } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import LazyLoad from "react-lazyload"

const PageHeader = ({ data }) => {

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
              <div className="badge"> <img src={data.badge.asset.fluid.src} alt={data.title} /> </div>
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