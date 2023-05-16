import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
import Image from "gatsby-image"

const Tag = ({ data }) => {
  const tags = data.allWpTag.nodes
  const categories = data.allWpCategory.nodes
  // const categories2 = data.allWpPost.nodes.map((post) => post.categories.nodes).flat()
  // const categoryBubble = categories.map((category) => category.name)

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
              active={selectedCategories.includes(category.name)}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
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
      {selectedCategories && (
        <PostsList>
          {filteredPosts.map((post, index) => {
            const { title, excerpt, date, uri } = post

            const { nodes: tags } = post.tags

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

                  <div itemProp="description" className="artbase-excerpt">
                    {parse(excerpt)}
                  </div>
                  <small className="artbase-date">{date}</small>

                  <div className="artbase-tags">
                    {tags &&
                      tags.map((tag, index) => {
                        return (
                          <Link
                            to={tag.link}
                            className="artbase-tag"
                            key={index}
                          >
                            {tag.name} {index !== tags.length - 1}
                          </Link>
                        )
                      })}
                  </div>
                </div>
              </li>
            )
          })}
        </PostsList>
      )}
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
const PostsList = styled.div`
  display: flex;
  align-items: center;
`

// import React, { useState, useEffect } from "react"
// import Layout from "../components/layout"
// import { graphql, Link } from "gatsby"
// import styled from "styled-components"

// const Tag = ({ data }) => {
//   const tags = data.allWpTag.nodes
//   const categories2 = data.allWpPost.nodes.map((post) => post.categories.nodes)
//   const categories = data.allWpCategory.nodes
//   const categoryBubble = data.allWpCategory.nodes.map((category) => category.name)
// // console.log(categories2, 'categories2')
//   const [selectedCategories, setSelectedCategories] = useState([])
//   // const [filteredCategories, setFilteredCategories] = useState(categories)

//   const [searchTerm, setSearchTerm] = useState("")
//   const [filteredTags, setFilteredTags] = useState(tags)

//   useEffect(() => {
//     let filteredTag = tags
//     let filteredCategory = categories

//     // // filter by selected categories
//     // if (selectedCategories.length > 0) {
//     //   filteredCategory = filteredCategory.filter((category) =>
//     //     selectedCategories.includes(category)
//     //   )
//     //   console.log(filteredCategory, 'filteredCategory')
//     // }
//     if (selectedCategories.length > 0) {
//       filteredCategory = categories2.filter((postCategories) =>
//         postCategories.some((category) =>
//           selectedCategories.includes(category.name)
//         )
//       )
//       console.log(filteredCategory, 'filteredCategory')
//     }

//     // filter by search term
//     if (searchTerm) {
//       filteredTag = filteredTag.filter((tag) =>
//         tag.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }

//     setFilteredTags(filteredTag)
//     setFilteredCategories(filteredCategory)
//   }, [tags, categories, categories2, selectedCategories, searchTerm])

//   const handleSearch = (event) => {
//     const value = event.target.value
//     setSearchTerm(value)
//   }

//   const handleCategoryClick = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter((c) => c !== category))
//     } else {
//       setSelectedCategories([...selectedCategories, category])
//     }
//   }

//   return (
//     <Layout>
//       <SearchBar>
//         <input
//           type="text"
//           placeholder="Search tags"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <CategoryList>
//           {categoryBubble.map((category, index) => (
//             <CategoryBubble
//               key={index}
//               active={selectedCategories.includes(category)}
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category}
//             </CategoryBubble>
//           ))}
//         </CategoryList>
//       </SearchBar>
//       <TagsList>
//         {filteredTags.map((tag, index) => (
//           <Link to={tag.link} key={index}>
//             {tag.name}
//           </Link>
//         ))}
//       </TagsList>
//     </Layout>
//   )
// }

// const SearchBar = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 1rem;

//   input {
//     border: none;
//     border-radius: 3px;
//     padding: 0.5rem 0.8rem;
//     font-size: 1.2rem;
//     flex-grow: 1;
//   }
// `

// const CategoryList = styled.div`
//   display: flex;
//   align-items: center;
// `

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

// import React, { useState } from "react"
// import Layout from "../components/layout"
// import { graphql, Link } from "gatsby"
// import styled from "styled-components"

// const Tag = ({ data }) => {
//   const tags = data.allWpTag.nodes
//   const categories = data.allWpCategory.nodes.map((category) => category.name)
//   console.log(categories)
//   const [selectedCategory, setSelectedCategory] = useState([])
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filteredTags, setFilteredTags] = useState(tags)

//     const handleSearch = (event) => {
//         const value = event.target.value
//         setSearchTerm(value)

//         const filtered = tags.filter((tag) => {
//           return tag.name.toLowerCase().includes(value.toLowerCase())
//         })

//         setFilteredTags(filtered)
//       }

//   return (
//     <Layout>
//       <SearchBar>
//         <input
//           type="text"
//           placeholder="Search tags"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <CategoryList>
//           {categories.map((category, index) => (
//             <CategoryBubble
//               key={index}
//               active={category === selectedCategory}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </CategoryBubble>
//           ))}
//         </CategoryList>
//       </SearchBar>
//       <TagsList>
//         {filteredTags.map((tag, index) => {
//           return (
//             <Link to={tag.link} key={index}>
//               {tag.name}
//             </Link>
//           )
//         })}
//       </TagsList>
//     </Layout>
//   )
// }

// const SearchBar = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 1rem;

//   input {
//     border: none;
//     border-radius: 3px;
//     padding: 0.5rem 0.8rem;
//     font-size: 1.2rem;
//     flex-grow: 1;
//   }
// `

// const CategoryList = styled.div`
//   display: flex;
//   align-items: center;
// `

// const CategoryBubble = styled.div`
//   border-radius: 20px;
//   background-color: ${({ active }) =>
//     active ? "var(--color-primary)" : "lightgrey"};
//   color: white;
//   margin-left: 0.5rem;
//   padding: 0.5rem 1rem;
//   cursor: pointer;
// `

// const TagsList = styled.section`
//   background: black;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   @media only screen and (min-width: 880px) {
//     grid-template-columns: repeat(8, 1fr);
//   }

//   a {
//     color: white;
//     background: black;
//     text-transform: uppercase;
//     padding: 0.8rem 1rem;
//     transition: color 700ms, background 700ms;

//     &:hover {
//       color: black;
//       background: var(--color-primary-light);
//     }
//   }
// `

// export const query = graphql`
//   {
//     allWpTag {
//       nodes {
//         name
//         link
//         id
//         slug
//       }
//     }
//     allWpCategory {
//       nodes {
//         name
//         link
//         id
//         slug
//       }
//     }
//   }
// `

// export default Tag

// const categories = ["artist", "event", "location"];

// const [selectedCategories, setSelectedCategories] = useState([]);
// const [filteredTags, setFilteredTags] = useState(tags);

// const handleCategoryClick = (category) => {
//   if (selectedCategories.includes(category)) {
//     setSelectedCategories(selectedCategories.filter((c) => c !== category));
//   } else {
//     setSelectedCategories([...selectedCategories, category]);
//   }
// };

// useEffect(() => {
//   if (selectedCategories.length === 0) {
//     setFilteredTags(tags);
//   } else {
//     setFilteredTags(tags.filter((tag) => selectedCategories.includes(tag.category)));
//   }
// }, [selectedCategories, tags]);

// // render category options
// const categoryOptions = categories.map((category) => (
//   <CategoryOption key={category} onClick={() => handleCategoryClick(category)}>
//     {category}
//     {selectedCategories.includes(category) && <CheckmarkIcon />}
//   </CategoryOption>
// ));

// // render filtered tags
// const tagList = filteredTags.map((tag, index) => (
//   <Link to={tag.link} key={index}>
//     {tag.name}
//   </Link>
// ));

// return (
//   <Layout>
//     <SearchBar>
//       <input type="text" placeholder="Search tags" onChange={handleSearch} />
//     </SearchBar>
//     <CategoryList>{categoryOptions}</CategoryList>
//     <TagList>{tagList}</TagList>
//   </Layout>
// );
