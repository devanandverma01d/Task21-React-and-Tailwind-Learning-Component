import React, { lazy, Suspense } from 'react'
const Layout = lazy(()=>import("../../components/layout/Layout"))
const Contact = lazy(()=>import("./Contact"))

const ContactIndexPage = () => {
  return (
    <Suspense fallback='Loading....'>
        <Layout children={<Contact />}/>
    </Suspense>
  )
}

export default ContactIndexPage