import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const Tag = ({ data }) => {
  const tags = data.allWpTag.nodes
  const categories = data.allWpCategory.nodes.map((category) => category.name)
  console.log(categories)
  const [selectedCategory, setSelectedCategory] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredTags, setFilteredTags] = useState(tags)


    const handleSearch = (event) => {
        const value = event.target.value
        setSearchTerm(value)
    
        const filtered = tags.filter((tag) => {
          return tag.name.toLowerCase().includes(value.toLowerCase())
        })
    
        setFilteredTags(filtered)
      }

  return (
    <Layout>
      <SearchBar>
        <input
          type="text"
          placeholder="Search tags"
          value={searchTerm}
          onChange={handleSearch}
        />
        <CategoryList>
          {categories.map((category, index) => (
            <CategoryBubble
              key={index}
              active={category === selectedCategory}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryBubble>
          ))}
        </CategoryList>
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
    border: none;
    border-radius: 3px;
    padding: 0.5rem 0.8rem;
    font-size: 1.2rem;
    flex-grow: 1;
  }
`

const CategoryList = styled.div`
  display: flex;
  align-items: center;
`

const CategoryBubble = styled.div`
  border-radius: 20px;
  background-color: ${({ active }) =>
    active ? "var(--color-primary)" : "lightgrey"};
  color: white;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
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
  }
`

export default Tag