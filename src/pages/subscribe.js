import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import bg from "../assets/ada-orb-logo.gif"

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
        <h1>ADA/subscribe</h1>
      </SubscribeTitle>

      <SubscribeBody className="fade-in">
        <div className="text">
          <p>
            Join the ADA List to share and receive community-wide notices of
            events, opportunities, ask questions from the hive-mind as well as
            receive updates from ADA-led projects.
          </p>
          <p>
            The ADA List is a legacy mailing list which began in 2003 to foster
            communication, collaboration and knowledge-sharing among those
            interesting in the then growing discipline of digital arts practice.
            The list is the founding element in forming the community and
            organisation of ADA. The list was established by{" "}
            <Link to="/tag/stella-brennan/">Stella Brennan</Link> and{" "}
            <Link to="/tag/sean-cubitt/">Sean Cubitt</Link> through an artist
            residency at the University of Waikato and has continued ever since.
          </p>
          <p>
            This democratic and community-focused list is accessible to anyone
            to join and we encourage you to take part in the local and
            international ADA community.
          </p>
          <Link
            href="https://list.waikato.ac.nz/postorius/lists/ada_list.list.waikato.ac.nz/"
            target="_blank"
            rel="noreferrer"
            className="button-cta button-cta-primary button-subscribe"
          >
            Check it out / sign up ⇨
          </Link>
        </div>

        <div className="image">
          <img className="footer-image" src={bg} alt="ada floating orbs" />
        </div>
      </SubscribeBody>

      <SubscribeTitle className="fade-in">
        <h2>ADA/legacy posts</h2>
      </SubscribeTitle>
      <div className="center">
        <iframe
          is="x-frame-bypass"
          title="mailing_list"
          style={{
            width: "100vw",
            height: "90vh",
            borderRadius: "1rem",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginBottom: "2rem",
          }}
          src="https://list.waikato.ac.nz/archives/list/ada_list@list.waikato.ac.nz/latest"
        />
      </div>
    </Layout>
  )
}

const SubscribeTitle = styled.div`
  margin-block-start: var(--spacing-2);
  padding: var(--spacing-4) var(--spacing-4) var(--spacing-2);

  @media only screen and (min-width: 940px) {
    margin-block-end: var(--spacing-4);
  }
`
const SubscribeBody = styled.div`
  padding: 0 1rem 1rem 1rem;
  display: grid;
  gap: 4rem;
  align-items: center;

  animation: fade-in 800ms 1 ease-out 200ms both;

  .text {
    max-width: 620px;
  }

  .image {
    display: none;
    margin: 0 auto;
    background: #f0f1f2;
    border-radius: 1rem;
  }

  img {
    max-height: 70vh;
    filter: invert(1);
    mix-blend-mode: multiply;
    max-width: 100%;
    padding: 1rem 2rem;
  }

  @media only screen and (min-width: 940px) {
    padding: 0 2rem 1rem 2rem;
    grid-template-columns: 1fr 1fr;
    margin-block-end: var(--spacing-4);

    .image {
      display: block;
    }

    .text {
      max-width: 620px;
      margin: 1rem auto 0;

      p:last-of-type {
        margin-bottom: 3rem;
      }
    }
  }
`

export default Subscribe
