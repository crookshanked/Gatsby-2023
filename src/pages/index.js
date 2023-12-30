// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageUrl="/" pageTitle="Home Page">
      <p>This is the home page content.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage