import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
import Image from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import ImgSymposium from "../assets/ada-sym-green.gif"

const ArtbaseIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="Artbase" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="Artbase" />
      <ArtbaseTitle className="collection-header">
        <h1>Artbase</h1>
      </ArtbaseTitle>

      <ArtbaseCollection className="collection-grid">
        {posts.map(post => {
          const { title, excerpt, date, uri } = post

          const { nodes: tags } = post.tags

          const { id } = post.id

          const altText = post.featuredImage?.node?.altText

          const featuredImage = {
            fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
            alt: altText !== "" ? altText : post.title,
          }

          return (
            <Link
              className="collection-item collection-feature"
              to={uri}
              key={uri}
              itemProp="url"
            >
              {featuredImage?.fluid && (
                <Image
                  fluid={featuredImage.fluid}
                  alt={featuredImage.alt}
                  style={{ width: "100%" }}
                  className="collection-image"
                />
              )}
              <div className="collection-info">
                <h2 className="collection-title">
                  <span itemProp="headline">{parse(title)}</span>
                </h2>

                {/* REMOVE EXCERPT FOR NOW */}
                {/* <div itemProp="description" className="artbase-excerpt">
                    {parse(excerpt)}
                  </div> */}

                <small className="collection-date">{date}</small>

                {/* REMOVE TAGS FOR NOW  */}
                {/* <div className="artbase-tags">
                  {tags &&
                    tags.map((tag, index) => {
                        return (
                            <Link to={tag.link} className="artbase-tag" key={index}>
                            {tag.name} {index !== tags.length - 1}
                            </Link>
                            )
                        })}
                    </div> */}
              </div>
            </Link>
          )
        })}
      </ArtbaseCollection>

      <ArtbaseNav className="button-wrapper">
        {previousPagePath && (
          <Link className="button-cta" to={previousPagePath}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z"
                fill="currentColor"
              />
            </svg>
          </Link>
        )}
        {nextPagePath && (
          <Link className="button-cta" to={nextPagePath}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"
                fill="currentColor"
              />
            </svg>
          </Link>
        )}
      </ArtbaseNav>
    </Layout>
  )
}

export default ArtbaseIndex

const ArtbaseTitle = styled.div``

const ArtbaseCollection = styled.div`
  /* list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 2px;
  background: var(--color-primary); */

  /* @media screen and (min-width: 940px) {
    grid-template-columns: 1fr 1fr;
  }

  .gatsby-image-wrapper {
    max-height: calc(100vh - 38px);
  }

  li {
    margin-bottom: 0;
    background: white;

    @media screen and (min-width: 940px) {
      display: flex;
      flex-direction: column;
      &:nth-child(even) {
        flex-direction: column-reverse;
      }
    }
  }

  h2 {
    margin: 0 0 0.8rem;
  } */

  /* .artbase {
    &-date {
      display: inline-block;
      margin-top: 1rem;
    }

    &-info {
      padding: 1.4rem 1.4rem 2rem;
      position: relative;
    }

    &-excerpt {
      max-width: 69ch;
    }

    &-nav {
      background: black;
    }

    &-tags {
      margin-top: 2.6rem;
      margin-bottom: 0.6rem;
    }

    &-tag {
      display: inline-block;
      text-transform: uppercase;
      font-size: 0.6rem;
      background: black;
      border-radius: 2rem;
      padding: 0.4rem 0.8rem;
      margin: 0 0.2rem 0.2rem 0;
      color: var(--color-primary-light);
      transition: background 300ms;

      &:hover {
        background: var(--color-primary-dark);
      }
    }
  } */
`

const ArtbaseNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-1) var(--spacing-4) var(--spacing-2);

  svg {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
  }

  a {
    line-height: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  a:last-child {
    margin-left: auto;
  }

  @media screen and (min-width: 940px) {
    flex-wrap: nowrap !important;
  }
`

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
      filter: {
        categories: { nodes: { elemMatch: { slug: { in: "artbase" } } } }
        title: { ne: "Contribute" }
      }
    ) {
      nodes {
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        id
        tags {
          nodes {
            id
            name
            link
          }
        }
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
`
