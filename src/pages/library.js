import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "gatsby-image"

const Library = ({ data }) => {
  return (
    <Layout>
      <Seo title="Library" />
      <LibraryTitle className="collection-header">
        <h1>Library</h1>
      </LibraryTitle>

      <LibraryCollection className="collection-grid">
        {data.allWpPost.nodes.map((post, index) => {
          const altText = post.featuredImage?.node?.altText

          const featuredImage = {
            fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
            alt: altText !== "" ? altText : post.title,
          }

          return (
            <Link
              className="collection-item collection-feature"
              to={post.uri}
              key={index}
            >
              <Image
                fluid={featuredImage.fluid}
                alt={featuredImage.alt}
                style={{ width: "100%" }}
                className="collection-image"
              />
              <div className="collection-info">
                <h2 className="collection-title">{post.title}</h2>
                <p className="collection-date">{post.date}</p>
              </div>
            </Link>
          )
        })}
      </LibraryCollection>
    </Layout>
  )
}

const LibraryTitle = styled.div``

const LibraryCollection = styled.section``

export const query = graphql`
  query LibraryPostsQuery {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Library" } } } }
      }
    ) {
      nodes {
        id
        title
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 60) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Library
