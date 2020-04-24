import React from 'react'
import BlockContent from "@sanity/block-content-to-react"

const BlogHeader = (data) => {
    return(
        <>
        <div className="blog-banner">
            <div className="container layer2">
                <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                    <div className="banner-title">{data.data.title}</div>
                    {data.data._rawBody && <BlockContent blocks={data.data._rawBody} />}
                    <div className="form-row inline-from w-100 py-5 pr-5">
                        <div class="form-group col-md-7">
                            <label htmlFor="i-email">Email</label>
                            <input type="email" id="i-email" class="form-control" />
                        </div>
                        <div class="form-group col-md-5">
                            <label htmlFor="name">&nbsp;</label>
                            <input type="submit" id="name" class="form-control" value="Tilmeld nyhedsbrev" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-end flex-column">
                    <img src={data.data.image.asset.fluid.srcWebp} alt={data.data.title} />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogHeader