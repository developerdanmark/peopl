import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload'

const VideoHeader = (data) => {
    const bg = data.data.bgImage.asset.fluid.src
    const embedUrl = 'https://www.youtube.com/embed/' + data.data.videoId + '?rel=0'
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                <div className="container py-5 layer2">
                    <div className="row py-5">
                        <div className="col-md-6 d-flex justify-content-center align-items-center pl-md-5 py-4 py-md-0 flex-column">
                            <div className="w-100">
                                <div className="tag"> {data.data.tag} </div>
                                <div className="banner-title">{data.data.title}</div>
                                {data.data._rawBody && <BlockContent blocks={data.data._rawBody} />}
                                <Link className="btn btn-peopl">Vil du høre mere?</Link>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center py-5 flex-column">
                            <LazyLoad>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" title="245% stigning fra SEO" src={embedUrl} allowfullscreen></iframe>
                                </div>
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoHeader