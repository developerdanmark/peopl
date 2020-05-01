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
                <div className="container layer2 d-flex justify-content-center align-items-start py-4 py-md-0 flex-column">
                    <div className="row">
                        {/*  */}
                        <div className="col-md-7">
                            <div className="tag"> {data.data.tag} </div>
                            <div className="banner-title">{data.data.title}</div>
                            {data.data._rawBody && <BlockContent blocks={data.data._rawBody} />}
                            <Link className="btn btn-peopl">Vil du høre mere?</Link>
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