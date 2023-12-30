// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
// let text = "";

// Create an array of the chapter navigation
// for (let i = 1; i < 65; i++) {
//   linkUrlArray += "chapters/chapter-"+i+"\n";
// } 
// console.log(linkUrlArray);


// Step 2: Define your component
const IChingPage = () => {
  return (
    <Layout pageTitle="List of I-Ching">
      <p>Content goes here</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>List of I-Ching</title>

// Step 3: Export your component
export default IChingPage