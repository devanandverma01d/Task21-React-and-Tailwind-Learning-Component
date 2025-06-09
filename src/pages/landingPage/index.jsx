import React, { lazy, Suspense } from 'react'
const Layout = lazy(()=>import('../../components/layout/Layout'))
const Home = lazy(()=>import('./Home'))

const HomeIndexPage = () => {
  return (
    <Suspense fallback="Loading....">
        <Layout children={<Home />} />
    </Suspense>
  )
}

export default HomeIndexPage