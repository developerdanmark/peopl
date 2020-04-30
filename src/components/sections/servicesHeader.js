import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload'

const ServicesHeader = (data) => {
    return (
        <>
            <div className="blog-banner">
                <div className="container layer2">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
                            <div className="banner-title">{data.data.title}</div>
                            {data.data._rawBody && <BlockContent blocks={data.data._rawBody} />}
                            <Link className="btn btn-peopl">Vil du høre mere?</Link>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-end flex-column">
                            <LazyLoad>
                                <img src={data.data.image.asset.fluid.src} alt={data.data.title} />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesHeader