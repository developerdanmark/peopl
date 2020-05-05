import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import Moment from 'react-moment';
import LazyLoad from 'react-lazyload';

const JobSection = (data) => {

    const posts = useStaticQuery(graphql`
        {
        data: allSanityJob {
            edges {
              node {
                _id
                _type
                title
                excerpt
                slug {
                  current
                }
                _rawBody
                mainImage {
                  asset {
                    fluid {
                      src
                      srcWebp
                    }
                  }
                }
                categories {
                  _id
                  title
                  slug {
                    current
                  }
                }
              }
            }
          }
          categories: allSanityJobCategory {
            edges {
              node {
                _id
                _type
                title
                description
                slug {
                  current
                }
              }
            }
          }

        }
    `)
    
    
    const [category, setCategory] = useState("all");
    
    useEffect(() => {
        window.history.state.cat != null ? setCategory(window.history.state.cat) : setCategory("all")
    }, [])

    const result = posts.data.edges
        .map(item => ({
            ...item,
            categories: item.node.categories
                .filter(child => child.slug.current.includes(category.toLowerCase()))
        }))
        .filter(item => item.categories.length > 0)

    const postList = category === "all" ? posts.data.edges : result

    return (
        <div className="container py-5">
            <div className="portfolio__labels mb-3">
                <button className={`post-filter-button ${(category === "all") ? 'active' : ''} `}
                    onClick={() => setCategory("all")}>
                    Alle emner
                </button>
                {posts.categories.edges.map((q) => {
                    return (
                        <button
                            className={`post-filter-button ${(category === q.node.slug.current) ? 'active' : ''} `}
                            onClick={() => setCategory(q.node.slug.current)}>
                            {q.node.title}
                        </button>
                    )
                })}
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row py-4 post-list">
                        {postList.map((q, i) => {
                            if (q.node.mainImage !== null) {
                                return (
                                    <div className="col-md-6">
                                        <div className="post" key={i}>
                                            <div className="post-image">
                                                <LazyLoad>
                                                    {q.node.mainImage && <img src={q.node.mainImage.asset.fluid.src} alt={q.node.title} />}
                                                </LazyLoad>
                                            </div>
                                            <div className="post-content">
                                                {q.node.categories.map((d, i) => { return <div className="tag"> {d.title} </div> })}
                                                <div className="post-title"> {q.node.title} </div>
                                                {/* {JSON.stringify(q.node)} */}
                                                <p className="post-excerpt"> {q.node.excerpt} </p>
                                                {/* {q.node._rawBody && <BlockContent blocks={q.node._rawBody} />} */}
                                                <Link to={'job/' + q.node.categories[0].slug.current +'/' + q.node.slug.current} className="post-link">&nbsp;</Link>
                                                <span className="post-date">
                                                    <Moment format="D. MMM YYYY" >{q.node.publishedAt}</Moment>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="col-md-6">
                                        <div className="post dark-bg" key={i}>
                                            <div className="post-image">
                                                <LazyLoad>
                                                    {q.node.mainImage && <img src={q.node.mainImage.asset.fluid.src} alt={q.node.title} />}
                                                </LazyLoad>
                                            </div>
                                            <div className="post-content">
                                                {q.node.categories.map((d, i) => { return <div className="tag"> {d.title} </div> })}
                                                <div className="post-title"> {q.node.title} </div>
                                                <p className="post-excerpt"> {q.node.excerpt} </p>
                                                {/* {q.node._rawBody && <BlockContent blocks={q.node._rawBody} />} */}
                                                <Link to={'job/' + q.node.categories[0].slug.current +'/' +  q.node.slug.current} className="post-link">&nbsp;</Link>
                                                <span className="post-date">
                                                    <Moment format="D. MMM YYYY" >{q.node.publishedAt}</Moment>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        {/* {projects.map(item =>
                            item.filtered === true ? <div className="col-md-6"><div className="post" key={item.name}>{item.name}</div></div> : ""
                        )} */}
                    </div>
                </div>
                <div className="col-lg-4 py-4">
                    <div className="sidebar">
                        <div className="title">Seneste blogindlæg</div>
                        <ul className="category-list">
                            {posts.data.edges.slice(0, 5).map((q) => {
                                return (
                                    <li className={q.node.slug.current}> <Link to={'job/' + q.node.categories[0].slug.current + '/' + q.node.slug.current}> {q.node.title} </Link> </li>
                                )
                            })}
                        </ul>
                        <div className="title">Kategorier</div>
                        <ul className="category-list">
                            {posts.categories.edges.map((q) => {
                                return (
                                    <li className={q.node.slug.current}> <Link to={'job'} onClick={() => setCategory(q.node.slug.current)}> {q.node.title} </Link> </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobSection