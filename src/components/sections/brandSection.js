import React from 'react'

const BrandSection = (data) => {
    return (
        <>
            {/* ########### Brands block ########### */}
            <div className="logo-block-full">
                <div className="container">
                    <div className="logos mx-auto">
                        {data.data.brandImages.map((q) => {
                            return (
                                <div className="kunde"><img src={q.asset.fluid.srcWebp} alt={q.title} /></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandSection