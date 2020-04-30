import React from 'react'
import LazyLoad from 'react-lazyload'

const BrandSection = (data) => {
    return (
        <>
            {/* ########### Brands block ########### */}
            <div className="logo-block-full">
                <div className="container">
                    <div className="logos mx-auto">
                        <LazyLoad>
                            {data.data.brandImages.map((q) => {
                                return (
                                    <div className="kunde"><img src={q.asset.fluid.src} alt={q.title} /></div>
                                )
                            })}
                        </LazyLoad>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandSection