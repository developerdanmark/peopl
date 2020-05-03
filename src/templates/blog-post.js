import React from 'react'
import { Link } from 'gatsby';
import Layout from "../components/layout"
import BlockContent from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url";
import Moment from 'react-moment';


const urlFor = source => urlBuilder({ projectId: "0ionf5c6", dataset: "production" }).image(source);

const blogPost = ({ pageContext = {} }) => {

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


    return (
        <Layout>
            <div className="post-page">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-md-8 pb-5">
                            {pageContext.post.categories.map((q, i) => {
                                return (
                                    <div className="tag"> {q.slug.current} </div>
                                )
                            })}
                            <h1> {pageContext.post.title} </h1>
                            <div className="post-date">
                                <Moment format="D. MMM YYYY" >{pageContext.post.publishedAt}</Moment>
                            </div>
                            <div className="post-image">
                                {pageContext.post.mainImage && <img src={pageContext.post.mainImage.asset.fluid.src} alt={pageContext.post.title} />}
                            </div>
                            {pageContext.post._rawBody && <BlockContent serializers={serializer} blocks={pageContext.post._rawBody} />}
                        </div>
                        <div className="col-md-4 py-5">
                            <div className="sidebar py-5">
                                <div className="title">Seneste blogindlæg</div>
                                {/* <code>
                                    {JSON.stringify(pageContext.posts)}
                                </code> */}
                                <ul className="category-list">
                                    {pageContext.posts.map((q) => {
                                        return (
                                            <li className={q.node.slug.current}> <Link to={'blog/' + q.node.slug.current}> {q.node.title} </Link> </li>
                                        )
                                    })}
                                </ul>
                                <div className="title">Kategorier</div>
                                <ul className="category-list">
                                    {pageContext.categories.map((q) => {
                                        return (
                                            <li className={q.node.slug.current}> <Link to={'category/' + q.node.slug.current}> {q.node.title} </Link> </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default blogPost