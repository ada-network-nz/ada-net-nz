import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const Tag = ({ data }) => {
  const tags = data.allWpTag.nodes
    // const allTags = data.allWpTag.nodes
  const [filteredTags, setFilteredTags] = useState(tags)
  const [searchTerm, setSearchTerm] = useState("")

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
           placeholder="SEARCH TAGS"
           value={searchTerm}
           onChange={handleSearch}
         />
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
  margin-bottom: 1rem;

  input {
    border: none;
    border-radius: 3px;
    padding: 0.5rem 0.8rem;
    font-size: 1.2rem;
    background-color: black;
    color: white;
    ::placeholder {
      color: #b8b8b8;
      opacity: 1; /* Firefox */
    }
  }
`
const TagsList = styled.section`
  background: black;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  @media only screen and (min-width: 880px) {
    grid-template-columns: repeat(8, 1fr);
  }
  /* gap: 1rem; */

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
  }
`

export default Tag
