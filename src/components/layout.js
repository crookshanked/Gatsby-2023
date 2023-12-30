import * as React from 'react'
import { Link } from 'gatsby'
import { container,heading,navLinks,navLinkItem,navLinkText } from './layout.module.css'

let linkUrlArray = [];
for (let i = 1; i < 65; i++) {
  linkUrlArray.push("chapters/chapter-"+i);
} 
// console.log(linkUrlArray);


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/page-3" className={navLinkText}>Page 3</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/page-4" className={navLinkText}>Page 4</Link>
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