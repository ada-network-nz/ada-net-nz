import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import styled from "styled-components"

const IndexEvent = () => {
  const data = useStaticQuery(graphql`
    {
      wpPost(
        tags: { nodes: { elemMatch: { name: { eq: "featured event" } } } }
      ) {
        id
        title
        excerpt
        date
        tags {
          nodes {
            name
          }
        }
        uri
        excerpt
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
  `)

  const altText = data.wpPost.featuredImage?.node?.altText

  const featuredImage = {
    fluid: data.wpPost.featuredImage?.node?.localFile?.childImageSharp.fluid,
    alt: altText !== "" ? altText : data.wpPost.title,
  }

  const renderEventTitle = () => {
    const pastEventTag = data.wpPost.tags.nodes.find(
      tag => tag.name === "Past Event"
    )
    const upcomingEventTag = data.wpPost.tags.nodes.find(
      tag => tag.name === "Upcoming Event"
    )

    if (pastEventTag) {
      return "Past Event"
    } else if (upcomingEventTag) {
      return "Upcoming Event"
    } else {
      return "Event"
    }
  }

  return (
    <IndexEventContent>
      <div className="container">
        <div className="info">
          <h4>—{renderEventTitle()}</h4>
          <h2>{data.wpPost.title}</h2>
          <p>{parse(data.wpPost.excerpt)}</p>
          <Link to={data.wpPost.uri} key={data.wpPost.id}>
            <CTA>—LEARN MORE</CTA>
          </Link>
          <Link to="/events/">
            <CTA>—OTHER EVENTS</CTA>
          </Link>
        </div>
        <Image
          fluid={featuredImage.fluid}
          alt={featuredImage.alt}
          style={{ width: "100%" }}
          className="image"
        />
      </div>
    </IndexEventContent>
  )
}

export default IndexEvent

const IndexEventContent = styled.section`
  h2 {
    font-size: 1.8rem;
    @media screen and (min-width: 940px) {
      font-size: 3.4rem;
    }
  }

  .container {
    color: black;
    display: grid;
    /* align-content: center; */
    min-height: 100vh;
    border-bottom: 2px solid #859508;

    @media screen and (min-width: 940px) {
      grid-template-columns: 1fr 1fr;
    }

    .info {
      padding: 1rem 15% 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  .image {
    grid-row: 1;
    @media screen and (min-width: 940px) {
      grid-row: unset;
    }
  }
`
const CTA = styled.button`
   {
    font-size: 1rem;
    display: flex;
    background: black;
    padding: 0.2rem 0.8rem;
    text-align: center;
    color: #e5f950;
    border: 1px solid #e5f950;
    box-shadow: 4px 4px 0 #e5f950;
    border-radius: 1rem;
    margin-bottom: 10px;

    &:hover {
      color: black;
      background-color: #859508;
    }
  }
`
