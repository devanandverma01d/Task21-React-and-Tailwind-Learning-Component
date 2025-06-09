import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Scrollable content area with background image */}
      <main
        className="flex-1 overflow-y-auto z-10 bg-white/70 backdrop-blur-md pt-[110px]"
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
