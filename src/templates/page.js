import React from 'react'
import Layout from "../components/layout"
import { HomeHeader,
    BrandSection,
    VideoSection,
    ServicesSection,
    ColoredSection,
    ReferencesSection,
    BlogHeader,
    ServicesHeader,
    ReferencesHeader,
    LeftImageSection,
    RightImageSection,
    TitleSection,
    Space
} from "../components/sections"

const page = ({ pageContext = {} }) => {

    return (
        <Layout home={pageContext.home}>
            {!pageContext.page && <div>No data</div>}
            {pageContext.page && !pageContext.page.sections && <div>No sections</div>}
            {pageContext.page &&
                pageContext.page.sections &&
                pageContext.page.sections.map((section, i) => {
                    switch (section._type) {
                        case 'homeHeader':
                            return (
                                <HomeHeader data={section} />
                            )
                        case 'brandSection':
                            return (
                                <BrandSection data={section} />
                            )
                        case 'videoSection':
                            return (
                                <VideoSection data={section} />
                            )
                        case 'servicesSection':
                            return (
                                <ServicesSection data={section} />
                            )
                        case 'referencesSection':
                            return (
                                <ReferencesSection data={section} />
                            )
                        case 'coloredSection':
                            return (
                                <ColoredSection data={section} />
                            )
                        case 'blogHeader': 
                            return (
                                <BlogHeader data={section} />
                            )
                        case 'servicesHeader':
                            return (
                                <ServicesHeader data={section} />
                            )
                        case 'referencesHeader':
                            return (
                                <ReferencesHeader data={section} />
                            )
                        case 'leftImageSection':
                            return (
                                <LeftImageSection data={section} />
                            )
                        case 'RightImageSection':
                            return (
                                <RightImageSection data={section} />
                            )
                        case 'space':
                            return (
                                <Space data={section} />
                            )
                        case 'titleSection':
                            return (
                                <TitleSection data={section} />
                            )
                        default:
                            return(<div>...{JSON.stringify(section._type)}</div>)
                    }
                })
            }
            {/* <code>
                {JSON.stringify(pageContext)}
            </code> */}
        </Layout>
    )
}

export default page