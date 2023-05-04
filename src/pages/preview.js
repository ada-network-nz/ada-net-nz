import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// test file to see if i can get the preview to work
const PreviewTemplate = ({ data }) => {
const post = data.wpPost.id
  return (
    <Layout>
    
        <div >
          <h1>
            ada <span>{post}</span>
          </h1>
        </div>
    
    </Layout>
  )
}


export const query = graphql`
  query GetSingleId($id: String = "cG9zdDo1Njg0") {
    wpPost(id: { eq: $id }) {
      title
      id
    }
  }
`

export default PreviewTemplate


// const post = data.wpPost
// console.log(post)
//   return (
//     <div> hiiiii
//       {/* <h1>{post.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
//     </div>
//   )
// }


