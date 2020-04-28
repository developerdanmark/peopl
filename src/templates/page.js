import React from 'react'
import Layout from "../components/layout"
import { 
    HomeHeader,
    PageHeader,
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
    Space,
    BlogSection,
    ContentSection
} from "../components/sections"

const page = ({ pageContext = {} }) => {

    return (
        <Layout navbarWhite={pageContext.page.isWhite}>
            {!pageContext.page && <div>No data</div>}
            {pageContext.page && !pageContext.page.sections && <div>No sections</div>}
            {pageContext.page &&
                pageContext.page.sections &&
                pageContext.page.sections.map((section, i) => {
                    switch (section._type) {
                        case 'homeHeader':
                            return (
                                <HomeHeader key={i} data={section} />
                            )
                        case 'brandSection':
                            return (
                                <BrandSection key={i} data={section} />
                            )
                        case 'videoSection':
                            return (
                                <VideoSection key={i} data={section} />
                            )
                        case 'servicesSection':
                            return (
                                <ServicesSection key={i} data={section} />
                            )
                        case 'referencesSection':
                            return (
                                <ReferencesSection key={i} data={section} />
                            )
                        case 'coloredSection':
                            return (
                                <ColoredSection key={i} data={section} />
                            )
                        case 'blogHeader': 
                            return (
                                <BlogHeader key={i} data={section} />
                            )
                        case 'servicesHeader':
                            return (
                                <ServicesHeader key={i} data={section} />
                            )
                        case 'referencesHeader':
                            return (
                                <ReferencesHeader key={i} data={section} />
                            )
                        case 'leftImageSection':
                            return (
                                <LeftImageSection key={i} data={section} />
                            )
                        case 'RightImageSection':
                            return (
                                <RightImageSection key={i} data={section} />
                            )
                        case 'space':
                            return (
                                <Space key={i} data={section} />
                            )
                        case 'titleSection':
                            return (
                                <TitleSection key={i} data={section} />
                            )
                        case 'blogSection':
                            return (
                                <BlogSection key={i} data={section} />
                            )
                        case 'pageHeader':
                            return (
                                <PageHeader key={i} data={section} />
                            )
                        case 'contentSection':
                            return (
                                <ContentSection key={i} data={section} />
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