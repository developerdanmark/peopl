import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload'

const ReferencesHeader = (data) => {
    return (
        <>
            <div className="blog-banner">
                <div className="layer1">
                    <LazyLoad>
                        <img src={data.data.image.asset.fluid.src} alt={data.data.title} />
                    </LazyLoad>
                </div>
                <div className="container layer2 d-block d-md-flex justify-content-center align-items-start py-5 py-md-0 flex-column">
                    <div className="row">
                        {/*  */}
                        <div className="col-12 col-xl-7">
                            <div className="tag"> {data.data.tag} </div>
                            <div className="banner-title">{data.data.title}</div>
                            {data.data._rawBody && <BlockContent blocks={data.data._rawBody} />}
                            {data.data.buttonText && <Link to={data.data.buttonLink} className="btn btn-peopl"> {data.data.buttonText} </Link>}
                        </div>
                        <div className="col-md-5 d-flex justify-content-center align-items-end pr-md-0 flex-column">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferencesHeader