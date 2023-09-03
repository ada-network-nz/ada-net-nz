// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import parse from "html-react-parser"
// import styled from "styled-components"


// const GameTemplate = ({ data }) => {
//   const post = data.wpPost.content
//   // console.log(post)
//   return (
//     <Layout>
//         <GameTemplateContent>
//       <div>
//       <h2>{data.wpPost.title}</h2>
//       {/* temporary revert, must solve x-frames issue
      
//       */}
//         {/* <iframe
//           src="/ThursdayTrader/index_thursday.html"
//           title="thursday_trader"
//           style={{ width: "100vw", height: "70vh" }}
//         ></iframe> */}
//         <div className="container">
//         <div className="content">
//         <p>{parse(data.wpPost.content)}</p>
//         </div>
//         </div>
//       </div>
//         </GameTemplateContent>
//     </Layout>
//   )
// }
// // thursday trader  query GetId($id: String = "cG9zdDo4NjMy")
// export const query = graphql`
//   query GetId($id: String = "cG9zdDo4NjMy") {
//     wpPost(id: { eq: $id }) {
//       title
//       id
//       content
//       date(formatString: "MMMM DD, YYYY")
//     }
//   }
// `

// const GameTemplateContent = styled.section`
//   h2 {
//     font-size: 1.8rem;
//     @media screen and (min-width: 940px) {
//       font-size: 3.4rem;
//     }
//   }

//   .container {
//     color: black;
//     display: flex;
//     align-content: center; 
//     justify-content: center;
//     min-height: 100vh;

//     .content {
//         padding: 1rem 20% 4rem;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//     min-width: 60vw;
//     }

//   }

  
// `

// export default GameTemplate

