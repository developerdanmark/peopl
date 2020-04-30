import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import LazyLoad from 'react-lazyload'

const BlogHeader = (data) => {
    return (
        <>
            <div className="blog-banner">
                <div className="container layer2">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                            <div className="banner-title">{data.data.title}</div>
                            {data.data._rawBody && <BlockContent blocks={data.data._rawBody} />}
                            <div className="form-row inline-from w-100 py-5 pr-5">
                                <div className="form-group col-md-7">
                                    <label htmlFor="b-email">Email</label>
                                    <input type="email" id="b-email" className="form-control" />
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="name">&nbsp;</label>
                                    <input type="submit" id="name" className="form-control" value="Tilmeld nyhedsbrev" />
                                </div>
                            </div>
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

export default BlogHeader