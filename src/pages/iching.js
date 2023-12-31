import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IChingPage = ({ data }) => {
  return (
    <Layout pageTitle="I-Ching Chapters">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li className="entry" key={node.name}>
              <a href={node.publicURL}>
                {node.name}
              </a>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile(sort: {name: ASC}) {
      nodes {
        name
        publicURL
      }
    }
  }
`
export const Head = () => <Seo title="I-Ching Chapters" />

export default IChingPage