import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import styled from "styled-components"

const IndexArtbase = () => {
  const data = useStaticQuery(graphql`
  {
      wpPost(
      tags: { nodes: { elemMatch: { name: { eq: "featured artbase" } } } }
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

//     console.log(data.wpPost)

  const altText = data.wpPost.featuredImage?.node?.altText

  const featuredImage = {
    fluid: data.wpPost.featuredImage?.node?.localFile?.childImageSharp.fluid,
    alt: altText !== "" ? altText : data.wpPost.title,
  }

  return (
    <IndexArtbaseContent>
      <div className="container">
        <Image
          fluid={featuredImage.fluid}
          alt={featuredImage.alt}
          style={{ width: "100%" }}
        />
        <div className="info">
          <h4>—Featured from the Artbase</h4>
          <h2>{data.wpPost.title}</h2>
          <p>{parse(data.wpPost.excerpt)}</p>
          <Link to={data.wpPost.uri} key={data.wpPost.id}>
            READ ON
          </Link>
          <Link to="/artbase/">EXPLORE ARTBASE</Link>
        </div>
      </div>
    </IndexArtbaseContent>
  )
}

export default IndexArtbase

const IndexArtbaseContent = styled.section`
  h2 {
    font-size: 1.8rem;
    @media screen and (min-width: 940px) {
      font-size: 3.4rem;
    }
  }

  .container {
    color: black;
    display: grid;
    min-height: 100vh;

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

  .img-container {
    height: 100%;
  }
`
