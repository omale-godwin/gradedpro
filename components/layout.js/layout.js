import React from 'react'
import Topbar from '../hearder/topbar';
import Header from '../hearder/header';
import Footer from '../footer/footer';
import Blog from '../blog/blog';
import Search from '../search/Topsearch';

export default function Layout({children}) {
    return (
        <div>
            <Topbar />
            <Header />
            <Search />
            {children}
            <Blog />
            <Footer />
           
            <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>&uarr;</a>
        </div>
    )
}
