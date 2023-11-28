import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const TagsList = ({ name }) => {
  // Get all the posts and filter them by the tag we want
  // We should optimize this query by only asking graphql for the
  // post contian the tags

  const { allWpPost } = useStaticQuery(
    graphql`
      query WpPosts {
        allWpPost(sort: { fields: [date], order: DESC }) {
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
  )

  const filteredPosts = []
  allWpPost.nodes.map(post => {
    const tags = post.tags.nodes

    tags.forEach(tag => {
      if (tag.name === name) filteredPosts.push(post)
    })
  })

  return (
    // <div className="tag-list__container">
    <TagsListContainer className="collection-grid">
      {filteredPosts &&
        filteredPosts.map(
          ({ id, title, excerpt, featuredImage, uri, date, tags }) => {
            const image = {
              fluid: featuredImage?.node?.localFile?.childImageSharp?.fluid,
              alt: featuredImage?.node?.altText || ``,
            }

            const gameLink = "/thursday-trader"

            return (
              <Link
                to={id === "cG9zdDo4NjMy" ? gameLink : uri}
                className="collection-item"
                key={id}
              >
                {featuredImage && (
                  <Image
                    fluid={image.fluid}
                    alt={image.alt}
                    className="collection-image"
                    // style={{ marginBottom: 50, width: "100%" }}
                  />
                )}
                <div className="collection-info">
                  {title && <h3 className="collection-title">{title}</h3>}
                  {date && <p className="collection-date">{date}</p>}
                </div>
              </Link>
            )
          }
        )}
      <Link className="button-cta button-back-tag" to="/tag">
        <h2>Tags</h2>
      </Link>
    </TagsListContainer>
  )
}

const TagsListContainer = styled.section`
  .button-back-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); */
    animation: fade-in 800ms 1 ease-out 200ms both;

    h2 {
      margin: 0;
      text-transform: lowercase;
    }
  }
`

export default TagsList
