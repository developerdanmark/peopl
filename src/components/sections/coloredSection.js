import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import LazyLoad from 'react-lazyload'

const ColoredSection = (data) => {



    return (
        <>
            {/* ########### Color Block ########### */}

            <div className="color-block py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex pb-5 pb-md-0 align-items-center">
                            <LazyLoad>
                                <div className="trustpilot-image"><img src={data.data.image.asset.fluid.src} alt={data.data.title} /></div>
                            </LazyLoad>
                        </div>
                        <div className="col-md-6">
                            {data.data._rawText && <BlockContent blocks={data.data._rawText} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColoredSection