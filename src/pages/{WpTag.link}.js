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
          <h1>
            ADA/tag /<span>{name}</span>
          </h1>
        </div>
        <TagsList name={name} />
      </TagPageContainer>
    </Layout>
  )
}

const TagPageContainer = styled.section`
  .tag-page__title {
    margin-block-start: var(--spacing-2);
    padding: var(--spacing-4) var(--spacing-4) var(--spacing-2);

    @media only screen and (min-width: 940px) {
      margin-block-end: var(--spacing-4);
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
