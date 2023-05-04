import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import styled from "styled-components"

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

  //   console.log(randomPost)

  function randomize(data) {
    const post = data.allWpPost.nodes
    const randomIndex = Math.floor(Math.random() * post.length)

    const randomPost = post[randomIndex]
    const altText = randomPost?.featuredImage?.node?.altText

    const featuredImage = {
      fluid: randomPost?.featuredImage?.node?.localFile?.childImageSharp.fluid,
      alt: altText !== "" ? altText : randomPost?.title,
    }
    console.log(randomPost)
    return (
        <div className="info">
          <h2>{randomPost.title}</h2>
          <p>{parse(randomPost.excerpt)}</p>
          <Link to={randomPost.uri} key={randomPost.id}>
        —READ MORE
        </Link>
        <Image
          fluid={featuredImage.fluid}
          alt={featuredImage.alt}
          style={{ width: "100%" }}
          className="image"
        />
        </div>
    )
  }

  return (
    <IndexRandomContent>
      <div className="container">
        <div className="info">
          <h2>Want something a little different?</h2>
          <SurpriseButton onClick={() => randomize(data)}>
            SURPRISE ME
          </SurpriseButton>
        </div>
      </div>
    </IndexRandomContent>
  )
}

export default IndexRandom

const IndexRandomContent = styled.section`
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

const SurpriseButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`
