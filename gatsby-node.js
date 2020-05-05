/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query allData {
        allSanityCategory {
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
        allSanityJobCategory {
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
        allSanityJob {
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

        allSanityPost {
          edges {
            node {
              _key
              title
              _rawBody
              excerpt
              publishedAt
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
        
        allSanityRoute {
          edges {
            node {
            title
            slug {
              current
            }
            page {
              _id
              title
              isWhite
              customClass
              sections {
                ... on SanityHomeHeader {
                  _key
                  _type
                  title
                  list1
                  list2
                  list3
                  bgImage {
                    asset {
                      fluid(maxWidth: 1500) {
                        src
                        srcWebp
                        base64
                      }
                    }
                  }
                  badge {
                    asset {
                      fluid(maxWidth: 600) {
                        src
                        srcWebp
                      }
                    }
                  }
                }
                ... on SanityBrandSection {
                  _key
                  _type
                  title
                  brandImages {
                    asset {
                      fluid {
                        srcWebp
                        src
                      }
                    }
                  }
                }
                ... on SanityVideoSection {
                    _key
                    _type
                    title
                    videoLink
                    buttonText
                    buttonLink
                    description
                }
                ... on SanityServicesSection {
                    _key
                    _type
                    title
                    description
                    servicesList {
                      _key
                      _type
                      _rawBody
                      title
                      icon {
                        asset {
                          fluid {
                            src
                            srcWebp
                          }
                        }
                      }
                      route {
                        _rawSlug
                        slug {
                          current
                        }
                      }
                    }
                  }
                  ... on SanityTitleSection {
                    _key
                    _type
                    title
                  }
                  ... on SanityReferencesSection {
                    _key
                    _type
                    title
                    servicesList {
                      videoId
                      title
                      route {
                        _rawSlug
                        slug {
                          current
                        }
                      }
                      image {
                        asset {
                          fluid {
                            src
                            srcWebp
                          }
                        }
                      }
                      _rawBody
                    }
                  }
                  ... on SanityColoredSection {
                    _key
                    _type
                    title
                    _rawText
                    image {
                      asset {
                        fluid {
                          src
                          srcWebp
                        }
                      }
                    }
                  }
                  ... on SanityBlogHeader {
                    _key
                    _type
                    title
                    tag
                    _rawBody
                    image {
                      asset {
                        fluid {
                          srcWebp
                          src
                        }
                      }
                    }
                  }
                  ... on SanityContentSection {
                    _key
                    _type
                    title
                    _rawBody
                  }
                  ... on SanityLeftImageSection {
                    _key
                    _type
                    title
                    _rawBody
                    buttonText
                    buttonLink
                    image {
                      asset {
                        fluid {
                          src
                          srcWebp
                        }
                      }
                    }
                  }
                  ... on SanityReferencesHeader {
                    _key
                    _type
                    title
                    tag
                    buttonText
                    buttonLink
                    _rawBody
                    image {
                      asset {
                        fluid {
                          src
                          srcWebp
                        }
                      }
                    }
                  }
                  ... on SanityRightImageSection {
                    _key
                    _type
                    title
                    _rawBody
                    buttonText
                    buttonLink
                    image {
                      asset {
                        fluid {
                          srcWebp
                          src
                        }
                      }
                    }
                  }
                  ... on SanityServicesHeader {
                    _key
                    _type
                    title
                    tag
                    buttonText
                    buttonLink
                    _rawBody
                    image {
                      asset {
                        fluid(maxWidth: 1500) {
                          src
                          srcWebp
                        }
                      }
                    }
                  }
                  ... on SanitySpace {
                    _key
                    _type
                    height
                    title
                  }
                  ... on SanityBlogSection {
                    _key
                    _type
                    title
                  }
                  ... on SanityJobSection {
                    _key
                    _type
                    title
                  }
                  ... on SanityPageHeader {
                    _key
                    _type
                    title
                    tag
                    _rawBody
                    bgImage {
                      asset {
                        fluid(maxWidth: 1500) {
                          src
                          srcWebp
                        }
                      }
                    }
                    icon {
                      asset {
                        fluid {
                          src
                          srcWebp
                        }
                      }
                    }
                  }
                  ... on SanityVideoHeader {
                    _key
                    _type
                    _rawBody
                    title
                    tag
                    videoId
                    buttonText
                    buttonLink
                    bgImage {
                      asset {
                        fluid(maxWidth: 1500) {
                          src
                          srcWebp
                        }
                      }
                    }
                  }


              }
            }
          }
         }
        }
      }
      
    `)
  
    if (result.errors) {
      throw result.errors
    }
  
    const pages = result.data.allSanityRoute.edges || []
    pages.forEach((edge, index) => {
      const path = `${edge.node.slug.current}`
      // const home = edge.node.slug.current == '/' ? true : false
      createPage({
        path,
        component: require.resolve("./src/templates/page.js"),
        context: { slug: edge.node.slug.current, page: edge.node.page },
      })
    })

    const posts = result.data.allSanityPost.edges || []
    const categories = result.data.allSanityCategory.edges || []
    posts.forEach((edge, index) => {
      const cat = edge.node.categories[0].slug.current
      const path = `/viden/${cat}/${edge.node.slug.current}`
      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { slug: edge.node.slug.current, post: edge.node, posts: posts, categories: categories },
      })
    })
    
    const jobs = result.data.allSanityJob.edges || []
    const jobCategories = result.data.allSanityJobCategory.edges || []
    jobs.forEach((edge, index) => {
      const cat = edge.node.categories[0].slug.current
      const path = `/job/${cat}/${edge.node.slug.current}`
      createPage({
        path,
        component: require.resolve("./src/templates/jobs.js"),
        context: { slug: edge.node.slug.current, post: edge.node, posts: jobs, categories: jobCategories },
      })
    })
  }