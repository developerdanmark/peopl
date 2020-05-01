import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload'

const ReferencesHeader = (data) => {
    return (
        <>
            <div className="blog-banner">
                <div className="container-fluid layer2">
                    <div className="row">
                        <div className="col-md-7 d-flex justify-content-center align-items-center pl-md-5 flex-column">
                            <div className="w-md-75">
                                <div className="tag"> {data.data.tag} </div>
                                <div className="banner-title">{data.data.title}</div>
                                {data.data._rawBody && <BlockContent blocks={data.data._rawBody} />}
                                <Link className="btn btn-peopl">Vil du høre mere?</Link>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex justify-content-center align-items-end pr-md-0 flex-column">
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

export default ReferencesHeader