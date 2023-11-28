import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import TagsList from "../components/tagsList"

const TagPage = ({ data }) => {
  const { name } = data.wpTag
  return (
    <Layout>
      <TagPageContainer>
        <div className="tag-page__title">
          <h2>
            tag == <span>{name}</span>
          </h2>
        </div>
        <TagsList name={name} />
      </TagPageContainer>
    </Layout>
  )
}

const TagPageContainer = styled.section`
  .tag-page__title {
    padding: var(--spacing-2) var(--spacing-4);
    margin-block-start: var(--spacing-2);

    h2 {
      margin: 0;
    }
  }
`

export const query = graphql`
  query GetSingleTag($link: String = "") {
    wpTag(link: { eq: $link }) {
      slug
      name
      link
      id
    }
  }
`

export default TagPage
