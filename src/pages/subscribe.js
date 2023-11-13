import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Subscribe = ({ data }) => {
  //   console.log(data)
  return (
    <Layout>
      <Seo title="Subscribe" />
      <SubscribeTitle>
        <h1>ADA Mailing List</h1>
      </SubscribeTitle>
      <iframe src='https://list.waikato.ac.nz/postorius/lists/ada_list.list.waikato.ac.nz/' />
      <NavLinkExternal
            href="https://list.waikato.ac.nz/postorius/lists/ada_list.list.waikato.ac.nz/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Check it out here ⇨</span>
          </NavLinkExternal>
    </Layout>
  )
}

const SubscribeTitle = styled.div`
  background: black;
  padding: 1rem;

  h1 {
    color: var(--color-primary);
  }
`
const NavLinkExternal = styled.a`
  font-size: 2.2rem;
  padding: 0.6rem 0.8rem;
  flex: 1;

  &:hover {
    color: black;
    background: var(--color-primary-light);
    border-left-color: black;
  }

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media screen and (min-width: 880px) {
    font-size: 0.7em;
  }
`

export default Subscribe
