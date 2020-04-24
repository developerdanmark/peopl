import React from 'react'

const TitleSection = (data) => {
    return(
        <div className="container">
            <div className="row">
                <div className="h1 w-100 text-center"> {data.data.title} </div>
            </div>
        </div>
    )
}

export default TitleSection