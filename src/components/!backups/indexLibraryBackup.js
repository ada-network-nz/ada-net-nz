// import React from "react"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
// import parse from "html-react-parser"
// import styled from "styled-components"

// const IndexLibrary = () => {
//   const data = useStaticQuery(graphql`
//     {
//       wpPost(id: { eq: "cG9zdDo3MDAx" }) {
//         id
//         title
//         excerpt
//         uri
//         excerpt
//         featuredImage {
//           node {
//             altText
//             localFile {
//               childImageSharp {
//                 fluid(maxWidth: 2000, quality: 60) {
//                   ...GatsbyImageSharpFluid_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   //EXISTING QUERY THAT WAS WORKING DAMMIT!
//   // filter: {
//   //   categories: { nodes: { elemMatch: { name: { eq: "Library" } } } }
//   // }

//   console.log(data)
//   return (
//     <div>
//       <IndexLibraryContent>
//         {data.allWpPost.nodes.map((post, index) => {
//           const altText = post.featuredImage?.node?.altText

//           const featuredImage = {
//             fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
//             alt: altText !== "" ? altText : post.title,
//           }

//           return (
//             <div className="container">
//               <Image
//                 fluid={featuredImage.fluid}
//                 alt={featuredImage.alt}
//                 style={{ width: "100%" }}
//               />

//               <div className="info">
//                 <h4>—Latest Publication</h4>
//                 <h2>{post.title}</h2>
//                 <p>{parse(post.excerpt)}</p>
//                 <Link to={post.uri} key={index}>
//                   —READ ON
//                 </Link>
//                 <Link to="/library/">—EXPLORE LIBRARY</Link>
//                 {/* <p>{post.date}</p> */}
//               </div>
//             </div>
//           )
//         })}
//       </IndexLibraryContent>
//     </div>
//   )
// }

// export default IndexLibrary

// const IndexLibraryContent = styled.section`
//   h2 {
//     font-size: 2rem;
//     @media screen and (min-width: 940px) {
//       font-size: 3.6rem;
//     }
//   }

//   .container {
//     color: black;
//     display: grid;
//     /* align-content: center; */
//     min-height: 100vh;

//     @media screen and (min-width: 940px) {
//       grid-template-columns: 1fr 1fr;
//     }

//     .info {
//       padding: 1rem 15% 2rem;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: flex-start;
//     }
//   }

//   .img-container {
//     height: 100%;
//   }

//   img {
//     /* object-fit: cover; */
//   }
// `
