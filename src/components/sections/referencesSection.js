import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload';

const ReferencesSection = (data) => {
    return (
        <>
            {/* ########### References Block ########### */}

            <div className="videocard-block py-5">
                <div className="container">
                    <div className="row py-5">
                        <div class="card-deck">
                            {data.data.servicesList.map((q) => {
                                return (
                                    <div class="card overflow-hidden">
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <LazyLoad>
                                                <iframe class="embed-responsive-item" title={q.title} src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                                            </LazyLoad>
                                        </div>
                                        <div class="card-body">
                                            <div className="kunde"><img src={q.image.asset.fluid.srcWebp} alt={q.title} /></div>
                                            <h5 class="card-title"> {q.title && q.title} </h5>
                                            {q._rawBody && <BlockContent blocks={q._rawBody} />}
                                        </div>
                                        <div className="footer">
                                            <Link to={q.route && q.route.slug.current} className="btn btn-outline-secondary card-button">Se case</Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReferencesSection