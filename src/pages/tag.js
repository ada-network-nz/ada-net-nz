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

  return (
    <Layout>
      <br></br><h1>Pick a Category</h1><br></br>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryBubble
            key={index}
            active={selectedCategories.includes(category.name)}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </CategoryBubble>
        ))}
      </CategoryList>
      {selectedCategories.length && (
        <PostsList>
          {filteredPosts.map((post, index) => {
            const { title, date, uri } = post

            const altText = post.featuredImage?.node?.altText

            const featuredImage = {
              fluid:
                post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
              alt: altText !== "" ? altText : post.title,
            }

            return (
              <li key={uri}>
                {featuredImage?.fluid && (
                  <Link to={uri} itemProp="url">
                    <Image
                      fluid={featuredImage.fluid}
                      alt={featuredImage.alt}
                      style={{ width: "100%" }}
                    />
                  </Link>
                )}

                <div className="artbase-info">
                  <h2>
                    <Link to={uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                  <small className="artbase-date">{date}</small>
                </div>
              </li>
            )
          })}
        </PostsList>
      )}
      <h1>OR</h1> 
      <br></br>
      
      <SearchBar><h1>Search Tags</h1>
        <input
          type="text"
          placeholder="Search tags"
          value={searchTerm}
          onChange={handleSearch}
        /><br></br>
      </SearchBar>
      <TagsList>
        {filteredTags.map((tag, index) => {
          return (
            <Link to={tag.link} key={index}>
              {tag.name}
            </Link>
          )
        })}
      </TagsList>
    </Layout>
  )
}

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  input {
    border: 1px solid grey;
    border-radius: 3px;
    padding: 0.5rem 0.8rem;
    margin: 2rem;
    font-size: 1.2rem;
    flex-grow: 1;
  }
`

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 0.1rem;
  justify-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: black;
    background: white;
    text-transform: uppercase;
    padding: 0.8rem 0.1rem;
    transition: color 700ms, background 700ms;
    width: 100%;
    font-size: 1.5rem;

    &:hover {
      color: black;
      background: var(--color-primary-light);
    }

    img {
      width: 100%;
      height: auto;
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (min-width: 880px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const CategoryBubble = styled.div`
  border-radius: 20px;
  background-color: ${({ active }) =>
    active ? "var(--color-primary)" : "grey"};
  color: white;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    color: black;
    background: var(--color-primary-light);
  }
`

const TagsList = styled.section`
  background: black;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  @media only screen and (min-width: 880px) {
    grid-template-columns: repeat(8, 1fr);
  }

  a {
    color: white;
    background: black;
    text-transform: uppercase;
    padding: 0.8rem 1rem;
    transition: color 700ms, background 700ms;

    &:hover {
      color: black;
      background: var(--color-primary-light);
    }
  }
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
