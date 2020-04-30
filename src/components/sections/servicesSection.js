import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import { Link } from "gatsby"
import LazyLoad from 'react-lazyload'

const ServicesSection = (data) => {
    return (
        <>
            {/* ########### Services Block ########### */}

            <div className="services-block py-5">
                <div className="container py-5">
                    <div className="row services-desc">
                        <div className="title h1">{data.data.title}</div>
                        <div className="description">
                            <p>{data.data.description}</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row icon-cards pb-5">
                        {data.data.servicesList.map((q) => {
                            return (
                                <div className="col-md-4 p-0">
                                    <div className="icon-card">
                                        <div className="icon-image facebook">
                                            <LazyLoad>
                                                <img src={q.icon.asset.fluid.src} alt={q.title} />
                                            </LazyLoad>
                                        </div>
                                        <div className="icon-title">{q.title}</div>
                                        {q._rawBody && <BlockContent blocks={q._rawBody} />}
                                        {q.route && <Link to={q.route.slug.current} className="icon-readmore">Læs mere</Link>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        </>
    )
}

export default ServicesSection