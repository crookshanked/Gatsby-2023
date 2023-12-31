import * as React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { container,siteTitle,heading,navLinks,navLinkItem,navLinkText } from './layout.module.css'


// console.log(linkUrlArray);


const Layout = ({ pageTitle, children }) => {
  const linkUrlArray = [];
  for (let i = 1; i < 65; i++) {
    linkUrlArray.push("chapters/chapter-"+i);
  } 

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  console.log(data);

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>Blog</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/iching" className={navLinkText}>I-Ching</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
          {children}
      </main>
    </div>
  )
}

export default Layout