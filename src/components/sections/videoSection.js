import React from 'react'
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload';

const VideoSection = (data) => {
    const embedUrl = 'https://www.youtube.com/embed/' + data.data.videoLink + '?rel=0'
    return (
        <>
            {/* ########### Video Block ########### */}

            <LazyLoad offset={-300}>
                <div className="video-block py-5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-5">

                                <div className="video-block-content mx-auto">
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" title="245% stigning fra SEO" src={embedUrl} allowfullscreen></iframe>
                                    </div>
                                    <div className="video-title">
                                        {data.data.title}
                                    </div>
                                    <p className="video-description mx-auto">
                                        {data.data.description}
                                    </p>
                                    {data.data.buttonText && <Link to={data.data.buttonLink} className="btn btn-outline-secondary video-button"> {data.data.buttonText} </Link>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LazyLoad>
        </>

    )
}

export default VideoSection