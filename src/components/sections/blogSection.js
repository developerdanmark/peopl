import React, { useEffect, useState } from 'react'
import { Link, useStaticQuery } from 'gatsby';
// import BlockContent from "@sanity/block-content-to-react"
import Moment from 'react-moment';

const BlogSection = (data) => {

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
                categories {
                  title
                  description
                  _id
                  slug {
                    current
                  }
                }
                mainImage {
                  asset {
                    fluid {
                      src
                      srcWebp
                    }
                  }
                }
                author {
                  _key
                  _rawBio
                  name
                  image {
                    asset {
                      fluid {
                        src
                        srcWebp
                      }
                    }
                  }
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

    // const portfolio = [
    //     {
    //         name: "My best client",
    //         category: ["all", "frontend", "ux-ui"]
    //     },
    //     {
    //         name: "My favorite case",
    //         category: ["all", "mobile", "ux-ui"]
    //     },
    //     {
    //         name: "A old job",
    //         category: ["all", "frontend"]
    //     },
    //     {
    //         name: "It is a really cool website",
    //         category: ["all", "frontend", "ux-ui"]
    //     },
    //     {
    //         name: "Something more",
    //         category: ["all", "others"]
    //     }
    // ];
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data.posts);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = projects.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div className="container py-5">
        <code>
            {JSON.stringify(data.posts)}
        </code>
            <div className="portfolio__labels">
                <button className="post-filter-button"
                    active={filter === "all"}
                    onClick={() => setFilter("all")}>
                    Alle emner
                </button>
                {/* <button className="post-filter-button"
                    active={filter === "frontend"}
                    onClick={() => setFilter("frontend")}
                >
                    Frontend
                </button>
                <button className="post-filter-button"
                    active={filter === "mobile"}
                    onClick={() => setFilter("mobile")}
                >
                    Mobile
                </button>
                <button className="post-filter-button"
                    active={filter === "ux-ui"}
                    onClick={() => setFilter("ux-ui")}
                >
                    UX/UI
                </button>
                <button className="post-filter-button"
                    active={filter === "others"}
                    onClick={() => setFilter("others")}
                >
                    Others
                </button> */}
                {posts.categories.edges.map((q) => {
                    return (
                        <button className={'post-filter-button' + ' ' + q.node.slug.current}> {q.node.title} </button>
                    )
                })}
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="row py-4 post-list">
                        {posts.data.edges.map((q, i) => {
                            if (q.node.mainImage !== null) {
                                return (
                                    <div className="col-md-6">
                                        <div className="post" key={i}>
                                            <div className="post-image">
                                                {q.node.mainImage && <img src={q.node.mainImage.asset.fluid.srcWebp} alt={q.node.title} />}
                                            </div>
                                            <div className="post-content">
                                                {q.node.categories.map((d, i) => { return <div className="tag"> {d.title} </div> })}
                                                <div className="post-title"> {q.node.title} </div>
                                                {/* {JSON.stringify(q.node)} */}
                                                <p className="post-excerpt"> {q.node.excerpt} </p>
                                                {/* {q.node._rawBody && <BlockContent blocks={q.node._rawBody} />} */}
                                                <Link to={'blog/' + q.node.slug.current} className="post-link">&nbsp;</Link>
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
                                                {q.node.mainImage && <img src={q.node.mainImage.asset.fluid.srcWebp} alt={q.node.title} />}
                                            </div>
                                            <div className="post-content">
                                                {q.node.categories.map((d, i) => { return <div className="tag"> {d.title} </div> })}
                                                <div className="post-title"> {q.node.title} </div>
                                                <p className="post-excerpt"> {q.node.excerpt} </p>
                                                {/* {q.node._rawBody && <BlockContent blocks={q.node._rawBody} />} */}
                                                <Link to={'blog/' + q.node.slug.current} className="post-link">&nbsp;</Link>
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
                <div className="col-md-4 py-4">
                    <div className="sidebar">
                        <div className="title">Seneste blogindlæg</div>
                        <ul className="category-list">
                            {posts.data.edges.map((q) => {
                                return (
                                    <li className={q.node.slug.current}> <Link to={'blog/' + q.node.slug.current}> {q.node.title} </Link> </li>
                                )
                            })}
                        </ul>
                        <div className="title">Kategorier</div>
                        <ul className="category-list">
                            {posts.categories.edges.map((q) => {
                                return (
                                    <li className={q.node.slug.current}> <Link to={'category/' + q.node.slug.current}> {q.node.title} </Link> </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection