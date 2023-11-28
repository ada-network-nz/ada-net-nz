import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "gatsby-image"

const Events = ({ data }) => {
  return (
    <Layout>
      <Seo title="Events" />
      <EventsTitle className="collection-header">
        <h1>ADA/Events</h1>
      </EventsTitle>

      <EventsCollection className="collection-grid">
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
      </EventsCollection>
    </Layout>
  )
}

const EventsTitle = styled.div``

const EventsCollection = styled.section``

export const query = graphql`
  query EventsPostsQuery {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Events" } } } }
      }
      sort: { fields: [date], order: DESC }
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

export default Events
