import React, { lazy, Suspense } from 'react'
const Layout = lazy(()=>import("../../components/layout/Layout"))
const About = lazy(()=>import("./About"))

const AboutIndexPage = () => {
  return (
    <Suspense fallback="Loading....">
        <Layout children={<About />} />
    </Suspense>
  )
}

export default AboutIndexPage