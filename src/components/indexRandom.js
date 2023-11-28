import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import styled from "styled-components"

import bg from "../assets/ada-orb-logo.gif"

const IndexRandom = () => {
  const data = useStaticQuery(graphql`
    query WordPressPostArchiveRandomQuery {
      allWpPost(sort: { fields: [date], order: DESC }) {
        nodes {
          uri
          date(formatString: "MMMM DD, YYYY")
          title
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
    }
  `)

  const [newIndex, setNewIndex] = useState(0)

  const post = data.allWpPost.nodes
  const randomIndex = Math.floor(Math.random() * post.length)
  const randomPost = post[randomIndex]

  const altText = randomPost?.featuredImage?.node?.altText

  const featuredImage = {
    fluid: randomPost?.featuredImage?.node?.localFile?.childImageSharp.fluid,
    alt: altText !== "" ? altText : randomPost?.title,
  }

  const handleClick = () => {
    setNewIndex(randomIndex)
  }

  return (
    <IndexRandomContent>
      {newIndex > 0 ? (
        <>
          <div className="content">
            <h4>Randomizer</h4>
            <h2>{randomPost.title}</h2>
            <p>{parse(randomPost.excerpt)}</p>
            {/* using <a> instead of <Link> to prevent rerenders on mouseover */}
            <div className="button-wrapper">
              <a
                className="button-cta button-cta-primary"
                href={randomPost.uri}
                key={randomPost.id}
              >
                READ ON
              </a>
              <button className="button-cta" onClick={() => handleClick()}>
                Generate again
              </button>
            </div>
          </div>

          <Image
            fluid={featuredImage.fluid}
            alt={featuredImage.alt}
            className="image"
          />
        </>
      ) : (
        <>
          <div className="content">
            <h4>Randomizer</h4>
            <h2>Generate a random post from the ADA network</h2>
            <button
              className="button-cta button-cta-primary"
              onClick={() => handleClick()}
            >
              Generate
            </button>
          </div>

          <img
            className="image image-placeholder"
            src={bg}
            alt="ada floating orbs"
          />
        </>
      )}
    </IndexRandomContent>
  )
}

export default IndexRandom

const IndexRandomContent = styled.section`
  /* background: var(--color-primary-dark); */
  display: grid;
  min-height: 80vh;

  .content {
    background: var(--color-bg);
    padding: var(--spacing-8) var(--spacing-8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .gatsby-image-wrapper {
    aspect-ratio: 1 / 1;
    border-radius: var(--borderRadius-small);
    width: calc(100vw - 2rem);
    margin: 1rem;
  }

  .image {
    grid-row: 1;
    max-height: 90vh;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    max-height: 90vh;
    object-fit: contain;
    padding: 1rem;
    border-radius: var(--borderRadius-large);
    filter: invert(1);
    mix-blend-mode: multiply;
  }

  /* DESKTOP */
  @media screen and (min-width: 940px) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: var(--spacing-2);

    .gatsby-image-wrapper {
      max-height: 85vh;
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
      /* border-radius: 0 var(--borderRadius-large) var(--borderRadius-large) 0; */
    }
  }
`
