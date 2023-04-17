import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";

import { Toaster } from 'react-hot-toast';



const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
    {/* helmet used for seo purpose */}
       <Helmet>
        <meta charSet="utf-8" />
        
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />


        
         <title>{title}</title>
              
      </Helmet>
    <Header/>
    <main style={{minHeight : "70vh"}}>
    <Toaster />
    {children}
    </main>
    <Footer/>
    </div>
 
  )
}


Layout.defaultProps={
  title : 'Ecommerce app shop-now',
  description : 'Mern stack project',
  keywords : 'node,react,mongodb ,express',
  author :'amarjeet'
}
export default Layout