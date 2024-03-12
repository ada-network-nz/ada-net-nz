import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Subscribe = ({ data }) => {
  //   console.log(data)
  return (
    <Layout>
      <Helmet>
        <script src="/x-frame-bypass.js" type="module"></script>
        <script src="//unpkg.com/@ungap/custom-elements"></script>
      </Helmet>
      <Seo title="Subscribe" />
      <SubscribeTitle>
        <h1>ADA Mailing List</h1>
      </SubscribeTitle>
      <SubscribeBodyText>
        Join the ADA List to share and receive community-wide notices of events,
        opportunities, ask questions from the hive-mind as well as receive
        updates from ADA-led projects. The ADA List is a legacy mailing list
        which began in 2003 to foster communication, collaboration and
        knowledge-sharing among those interesting in the then growing discipline
        of digital arts practice. The list is the founding element in forming
        the community and organisation of ADA. The list was established by
        Stella Brennan and Sean Cubitt through an artist residency at the
        University of Waikato and has continued ever since. This democratic and
        community-focused list is accessible to anyone to join and we encourage
        you to take part in the local and international ADA community.
      </SubscribeBodyText>
      <Link
        href="https://list.waikato.ac.nz/postorius/lists/ada_list.list.waikato.ac.nz/"
        target="_blank"
        rel="noreferrer"
        className="button-cta button-cta-primary"
      >
        Check it out, and sign up, here ⇨
      </Link>
      <iframe
        is="x-frame-bypass"
        title="mailing_list"
        style={{ width: "90vw", height: "90vh" }}
        src="https://list.waikato.ac.nz/archives/list/ada_list@list.waikato.ac.nz/latest"
      />
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
const SubscribeBodyText = styled.div`
  padding: 2rem;

`

export default Subscribe
