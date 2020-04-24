import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import { Link } from 'gatsby'

const RightImageSection = (data) => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="content-title">{data.data.title}</div>
                        {data.data._rawBody && <BlockContent blocks={data.data._rawBody} />}
                        {data.data.buttonText && <Link className="btn btn-outline-secondary">{data.data.buttonText}</Link>}
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        {data.data.image && <img src={data.data.image.asset.fluid.srcWebp} alt={data.data.title} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightImageSection