// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import Seo from '../components/seo'


// Step 2: Define your component
const AboutPage = () => {
  return ( 
    <Layout pageUrl="/about" pageTitle="About">
      <p>This is where I write about myself.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <Seo title="About Me"/>
    <meta name="description" content="Lorem ipsum dolcet alors...this site was created using Gatsby." />
  </>
)

// Step 3: Export your component
export default AboutPage