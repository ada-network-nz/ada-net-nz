import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import styled from "styled-components"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const altText = post.featuredImage?.node?.altText

  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: altText !== "" ? altText : post.title,
  }

  const { nodes: tags } = post.tags

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <Post
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.fluid && (
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              className="hero-image"
            />
          )}

          <div className="hero-content">
            <Link href="#content">
              <h1 itemProp="headline">{parse(post.title)}</h1>
            </Link>

            <div className="tag-wrapper">
              {tags &&
                tags.map((tag, index) => {
                  return (
                    <Link
                      to={tag.link}
                      className="button-cta button-tag"
                      key={index}
                    >
                      {tag.name} {index !== tags.length - 1}
                    </Link>
                  )
                })}
            </div>
          </div>

          {/* <p>{post.date}</p> */}
        </header>

        {!!post.content && (
          <section itemProp="articleBody" id="content">
            {parse(post.content)}
          </section>
        )}
      </Post>

      <PostNav className="button-wrapper">
        {previous && (
          <Link
            className="button-cta button-cta-primary"
            to={previous.uri}
            rel="prev"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z"
                fill="currentColor"
              />
            </svg>{" "}
            {parse(previous.title)}
          </Link>
        )}

        {next && (
          <Link
            className="button-cta button-cta-primary"
            to={next.uri}
            rel="next"
          >
            {parse(next.title)}{" "}
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
      </PostNav>
    </Layout>
  )
}

const Post = styled.article`
  position: relative;

  strong {
    font-variation-settings: "wdth" 120;
  }

  /* FOOTNOTES PADDING FIX */
  p[id*="note"] a:before {
    content: "";
    height: 45px;
    margin-top: -45px;
    display: block;
  }

  header {
    padding: var(--spacing-4);

    @media screen and (min-width: 940px) {
      padding: 0;
      max-height: calc(100vh - 48px);
      overflow-y: hidden;
      position: relative;
    }
  }

  .hero-image {
    /* aspect-ratio: 1 / 1; */
    border-radius: var(--borderRadius-large);
    max-width: 100%;
    max-height: 100vh;
    image-rendering: pixelated;

    @media screen and (min-width: 940px) {
      aspect-ratio: unset;
      border-radius: 0;
    }
  }

  h1 {
    max-width: 90%;
    margin-bottom: 0.6rem;
    transition: text-shadow 600ms;
    animation: font-loader 2000ms 1 normal 100ms both;
    &:hover {
      text-shadow: 0 10px 20px var(--color-primary-light);
    }
  }

  .hero-content {
    background: var(--color-white);
    padding: var(--spacing-6) var(--spacing-4);
    border-radius: var(--borderRadius-large);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    @media screen and (min-width: 940px) {
      border: 1px solid var(--color-black);
      width: 58vw;
      position: absolute;
      padding: var(--spacing-6) var(--spacing-8);
      bottom: var(--spacing-4);
      left: var(--spacing-4);
    }
  }

  .tag-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-1);
  }

  .button-tag {
    font-size: 0.6rem !important;
    whitespace: pre;
  }

  section {
    margin: 0 auto;
    padding: var(--spacing-6) var(--spacing-4);

    @media screen and (min-width: 940px) {
      padding-top: 3.4rem;
      max-width: 760px;
    }

    .gatsby-image-wrapper {
      border-radius: var(--borderRadius-small);
      width: 100% !important;
      image-rendering: pixelated;
      transition: border-radius 600ms ease-in-out;

      :hover {
        border-radius: 6rem;
      }
    }
  }
`

const PostNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-1) var(--spacing-4);

  svg {
    flex-shrink: 0;
    width: 16px;
    /* height: 22px; */
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      tags {
        nodes {
          id
          name
          link
        }
      }
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
