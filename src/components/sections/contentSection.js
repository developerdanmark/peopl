import React, { useEffect } from 'react'
import BlockContent from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url";

const urlFor = source => urlBuilder({ projectId: "0ionf5c6", dataset: "production" }).image(source);

const ContentSection = (data) => {

    const serializer = {
        types: {
            image(props) {
                return (
                    <img
                        src={urlFor(props.node.asset)
                            .width(600)
                            .url()}
                        alt={props.node.alt}
                    />
                )
            }
        }
    }
    

    useEffect(() => {
        // var headings = document.querySelectorAll("h1");
        // document.getElementById("demo").innerHTML =
        // "The innerHTML of the second paragraph is: " +
        // headings[1].innerHTML;
    })

    return (
        <div className="container py-5 single-page">
            <div className="row py-5">
                <div className="col-md-8 content">
                    <h1> {data.data.title} </h1>
                    {data.data._rawBody && <BlockContent serializers={serializer} blocks={data.data._rawBody} />}
                </div>
                <div className="col-md-4">
                    <div className="sidebar">
                        <div id="demo" className="headings"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection