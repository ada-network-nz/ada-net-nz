import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import styled from "styled-components"

const IndexLibrary = () => {
  const data = useStaticQuery(graphql`
    {
      wpPost(
        tags: { nodes: { elemMatch: { name: { eq: "featured publication" } } } }
      ) {
        id
        title
        excerpt
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

  return (
    <IndexLibraryContent>
      <div className="content">
        <h4>Latest Publication</h4>
        <h2>{data.wpPost.title}</h2>
        <p>{parse(data.wpPost.excerpt)}</p>
        <div className="button-wrapper">
          <Link
            className="button-cta button-cta-primary"
            to={data.wpPost.uri}
            key={data.wpPost.id}
          >
            READ ON
          </Link>
          <Link className="button-cta" to="/library/">
            EXPLORE LIBRARY
          </Link>
        </div>
      </div>

      <Image
        fluid={featuredImage.fluid}
        alt={featuredImage.alt}
        className="image"
      />
    </IndexLibraryContent>
  )
}

export default IndexLibrary

const IndexLibraryContent = styled.section`
  display: grid;
  min-height: 90vh;
  padding-bottom: var(--spacing-10);

  .content {
    padding: var(--spacing-6) var(--spacing-8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 780px;
  }

  .gatsby-image-wrapper {
    aspect-ratio: 1 / 1;
    border-radius: var(--borderRadius-small);
    width: calc(100vw - 2rem);
    margin: 1rem;
  }

  .image {
    grid-row: 1;
  }

  /* DESKTOP */
  @media screen and (min-width: 940px) {
    padding-bottom: 0;
    grid-template-columns: 1fr 1fr;

    h2 {
      max-width: 18ch;
    }

    .gatsby-image-wrapper {
      margin: 0;
      aspect-ratio: unset;
      width: 100%;
      border-radius: var(--borderRadius-large) 0 0 var(--borderRadius-large);
    }

    .content {
      padding-block: var(--spacing-16);
      padding-left: var(--spacing-32);
      padding-right: var(--spacing-20);
    }

    .image {
      grid-row: unset;
  }
`
