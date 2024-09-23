import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'


const Layout = () => {
    return (
        <div>
            <ScrollToTop/>
            <Header />
            <div className='min-h-[79vh]'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
