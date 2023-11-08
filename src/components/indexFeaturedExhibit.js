import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
// import Helmet from "react-helmet"
import styled from "styled-components"

const FeaturedExhibit = () => {
  const data = useStaticQuery(graphql`
  {
    wpPost(
      tags: { nodes: { elemMatch: { name: { eq: "featured exhibit" } } } }
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

// const altText = data.wpPost.featuredImage?.node?.altText

// const featuredImage = {
//   fluid: data.wpPost.featuredImage?.node?.localFile?.childImageSharp.fluid,
//   alt: altText !== "" ? altText : data.wpPost.title,
// }

  return (
    <Content>
       <div id="info">
        <h2>Featured Artist -- Xi Li</h2>
        <Link to="/thursday-trader/"> 
        {/* <Link to={data.wpPost.uri} key={data.wpPost.id}> */}
          <CTA>--READ ON</CTA>
        </Link>
      </div>
      <div class="container">
        <html>
          <body>
            <br />
            <iframe
              src="https://player.vimeo.com/video/879621293?h=14b0d660b3&color=dec78c"
              style={{ width: "100vw", height: "85vh" }}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer"
              allowfullscreen
            ></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </body>
        </html>
      </div>
    </Content>
  )
}

export default FeaturedExhibit

const Content = styled.section`
  h2 {
    font-size: 1.5rem;
    @media screen and (min-width: 940px) {
      font-size: 3.4rem;
    }
  }
  
  h3 {
    color: #859508;
  }

  .container {
    color: black;
    display: grid;
    min-height: 60vh;
    border-bottom: 2px solid #859508;

    @media screen and (min-width: 940px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  #info {
    padding: 1rem 15% 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
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
