import React, { useEffect } from 'react'
import BlockContent from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url";
import { Link, useStaticQuery } from 'gatsby';
import LazyLoad from 'react-lazyload';

const urlFor = source => urlBuilder({ projectId: "0ionf5c6", dataset: "production" }).image(source);

const ContentSection = (data) => {

    const posts = useStaticQuery(graphql`
        {
            data: allSanityPost {
                edges {
                    node {
                        _key
                        title
                        _rawBody
                        excerpt
                        slug {
                            current
                        }
                    }
                }
            }
            categories: allSanityCategory {
                edges {
                    node {
                        _id
                        _type
                        title
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `)

    const serializer = {
        types: {
            image(props) {
                return (
                    <LazyLoad>
                        <img
                            src={urlFor(props.node.asset)
                                .width(600)
                                .url()}
                            alt={props.node.alt}
                        />
                    </LazyLoad>
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
                <div className="col-lg-8 content">
                    <h1> {data.data.title} </h1>
                    {data.data._rawBody && <BlockContent serializers={serializer} blocks={data.data._rawBody} />}
                </div>
                <div className="col-lg-4">
                    <div className="sidebar">
                        {/* <div id="demo" className="headings"></div> */}
                        <div className="title">Seneste blogindlæg</div>
                        <ul className="category-list">
                            {posts.data.edges.slice(0, 5).map((q, i) => {
                                return (
                                    <li key={i} className={q.node.slug.current}> <Link to={'blog/' + q.node.slug.current}> {q.node.title} {i} </Link> </li>
                                )
                            })}
                        </ul>
                        <div className="title">Kategorier</div>
                        <ul className="category-list">
                            {posts.categories.edges.map((q, i) => {
                                return (
                                    <li key={i} className={q.node.slug.current}> <Link to={'category/' + q.node.slug.current}> {q.node.title} </Link> </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection