import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
import Image from "gatsby-image"

const Tag = ({ data }) => {
  const tags = data.allWpTag.nodes
  const categories = data.allWpCategory.nodes

  const [selectedCategories, setSelectedCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredTags, setFilteredTags] = useState(tags)
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    let filteredTag = tags
    let filteredPost = data.allWpPost.nodes

    // filter by selected categories
    if (selectedCategories.length > 0) {
      filteredPost = filteredPost.filter(post =>
        post.categories.nodes.some(category =>
          selectedCategories.includes(category.name)
        )
      )
    }

    // filter by search term
    if (searchTerm) {
      filteredTag = filteredTag.filter(tag =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredTags(filteredTag)
    setFilteredPosts(filteredPost)
  }, [tags, data.allWpPost.nodes, selectedCategories, searchTerm])

  const handleSearch = event => {
    const value = event.target.value
    setSearchTerm(value)
  }

  const handleCategoryClick = category => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }
  // in the future, we would like a better way embed the thursday trader game in the post, so we don't have
  // to do this weird conditional routing everywhere
  const gameLink = "/thursday-trader"

  return (
    <Layout>
      <SearchTitle>
        <h2>Filter categories</h2>
      </SearchTitle>

      <CategoryList>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            active={selectedCategories.includes(category.name)}
            onClick={() => handleCategoryClick(category.name)}
            className="button-cta"
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryList>

      {selectedCategories.length ? (
        <PostsCollection>
          {filteredPosts.map((post, index) => {
            const { title, date, uri, id } = post

            const altText = post.featuredImage?.node?.altText

            const featuredImage = {
              fluid:
                post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
              alt: altText !== "" ? altText : post.title,
            }

            return (
              <Link
                to={id === "cG9zdDo4NjMy" ? gameLink : uri}
                itemProp="url"
                key={uri}
                className="collection-item"
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
                  <h3>{parse(title)}</h3>
                  <p className="collection-date">{date}</p>
                </div>
              </Link>
            )
          })}
        </PostsCollection>
      ) : (
        <PostsCollection />
      )}

      <SearchBar>
        <h3>Search Tags</h3>
        <input
          type="text"
          placeholder="Search tags"
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchBar>

      <TagsCollection>
        {filteredTags.map((tag, index) => {
          return (
            <Link className="button-cta" to={tag.link} key={index}>
              {tag.name}
            </Link>
          )
        })}
      </TagsCollection>
    </Layout>
  )
}

const SearchTitle = styled.div`
  padding: var(--spacing-4) var(--spacing-4);

  h2 {
    margin: 0;
  }
`

const CategoryList = styled.div`
  display: flex;
  padding: var(--spacing-2) var(--spacing-4);
  gap: 0.4rem;
  flex-wrap: wrap;
`

const CategoryButton = styled.div`
  font-size: 0.8rem !important;
  flex-grow: 1;
  background-color: ${({ active }) =>
    active ? "var(--color-primary-light)" : "var(--color-white)"} !important;
  &:last-child {
    display: none;
  }
`

const PostsCollection = styled.div`
  display: grid;
  grid-template-colums: 1;
  padding-block: 1.6rem;
  padding-inline: 0.8rem;
  gap: 1.4rem 0.8rem;

  @media only screen and (min-width: 940px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`

const SearchBar = styled.div`
  padding: var(--spacing-2) var(--spacing-4);
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
  }

  input {
    text-transform: uppercase;
    letter-spacing: 0.03rem;
    border: 1px solid var(--color-black);
    border-radius: var(--borderRadius-small);
    padding: var(--spacing-2) var(--spacing-4);

    flex-grow: 1;

    &:focus {
      border-color: var(--color-primary-light);
    }
  }
`

const TagsCollection = styled.section`
  padding: var(--spacing-2) var(--spacing-4);
  display: grid;
  gap: var(--spacing-2);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`

export const query = graphql`
  {
    allWpTag {
      nodes {
        name
        link
        id
        slug
      }
    }
    allWpCategory {
      nodes {
        name
        link
        id
        slug
      }
    }
    allWpPost {
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
        categories {
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

export default Tag
