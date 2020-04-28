import React from 'react'
import BlockContent from "@sanity/block-content-to-react"

const ColoredSection = (data) => {
    
   

    return (
        <>
            {/* ########### Color Block ########### */}

            <div className="color-block py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="trustpilot-image"><img src={data.data.image.asset.fluid.srcWebp} alt={data.data.title} /></div>
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