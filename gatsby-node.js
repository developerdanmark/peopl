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
              customClass
              sections {
                ... on SanityHomeHeader {
                  _key
                  _type
                  title
                  bgImage {
                    asset {
                      fluid {
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
                          srcSet
                        }
                      }
                    }
                  }
                  ... on SanityServicesHeader {
                    _key
                    _type
                    title
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
                  ... on SanitySpace {
                    _key
                    _type
                    height
                    title
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
      const home = edge.node.slug.current == '/' ? true : false
      createPage({
        path,
        component: require.resolve("./src/templates/page.js"),
        context: { slug: edge.node.slug.current, page: edge.node.page, home: home },
      })
    })
  }