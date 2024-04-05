import React from 'react'
import Header from '../components/includes/Header';
import Footer from '../components/includes/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout