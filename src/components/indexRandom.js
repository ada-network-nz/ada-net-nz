import React, { useState } from "react"
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
      <div>
        {newIndex > 0 ? (
          <div className="container">
            <div className="info">
              <h2>What a thrill!</h2>
              <CTA onClick={() => handleClick()}>
                Spin again
              </CTA>
            </div>
            <div>
              <h2>{randomPost.title}</h2>
              <p>{parse(randomPost.excerpt)}</p>
              {/* using <a> instead of <Link> to prevent rerenders on mouseover */}
              <a href={randomPost.uri} key={randomPost.id}>
                <CTA>
                  --READ ON
                </CTA>
              </a>
              <br />
              <Image
                fluid={featuredImage.fluid}
                alt={featuredImage.alt}
                style={{ width: "100%" }}
                className="image"
              />
            </div>
          </div>
        ) : (
          <div className="surprise">
            <h2>Generate random post</h2>
            <CTA onClick={() => handleClick()}>
              SURPRISE ME
            </CTA>
          </div>
        )}
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
    max-height: 100vh;
    overflow: hidden;
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
      max-height: 100vh;
    }

    .image {
      grid-row: 1;
      max-height: 80vh;
      @media screen and (min-width: 940px) {
        grid-row: unset;
      }
    }
  }

  .surprise {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    border-bottom: 2px solid #859508;
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
