import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import bg from "../assets/ada-orb-logo.gif"

const Footer = () => {
  return (
    <FooterContainer>
      <img className="footer-image" src={bg} alt="ada floating orbs" />
      <p>
        <Link href="/">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 4h8v2h10v14H2V4h2zm16 4H10V6H4v12h16V8z"
              fill="currentColor"
            />
          </svg>
          {new Date().getFullYear()} Aotearoa Digital Arts
        </Link>
      </p>
      <p>
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/2.5/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            fill="none"
            image-rendering="optimizeQuality"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            viewBox="0 0 46296.26 40689.13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m23204.91 7530.98c2944.63-3188.84 6384.04-4639.01 10366.38-4077.21 4110.34 579.88 7609.97 3518.41 8854.17 7479.01 957.39 3047.58 559.96 6460.83-722.09 9573.35-1993.98 4840.97-7886.31 11722.09-18555.24 16532.85-10668.92-4810.76-16561.25-11691.88-18555.24-16532.85-1282.05-3112.52-1679.47-6525.77-722.09-9573.35 1244.19-3960.6 4743.83-6899.13 8854.17-7479.01 3982.46-561.82 7421.94 888.46 10366.64 4077.48 5.4 5.84 56.52 61.37 56.53 61.36.04.04 51.9-56.36 56.79-61.63zm-56.79-4522.44c-6431.69-5048.01-16512.25-3730.83-21147.65 3855.94-1539.08 2519.03-2117.14 5447.75-1981.3 8355.45 235.64 5043.59 2412.75 9452.27 5610.61 13256.78 4306.02 5122.9 10531.26 9148.59 17382.21 12152.72 9.53 4.18 88.63 38.56 136.13 59.69 41.66-17.53 114.6-50.41 137.01-60.3 6815.65-3004.07 13075.56-7030.12 17381.33-12152.12 3198.08-3804.33 5374.97-8213.2 5610.61-13256.78 135.85-2907.7-442.2-5836.43-1981.3-8355.45-4635.4-7586.77-14715.95-8903.95-21147.65-3855.94z"
            />
            <path
              fill="currentColor"
              d="m22983.64 21630.19-2928.01-1451.38c-1017.73 1483.99-1758.21 2488.33-3897.08 1902.25-1678.91-460.05-2175.85-2300.18-2239.67-3843.76-87.17-2108.39 649.94-4543.46 3168.15-4413.24 1609.13 83.19 2294.75 1032.23 2661.15 1885.36l3196.99-1638.9c-1574.75-3004.31-5265.13-4026.05-8393.32-3188.81-3328.66 890.9-5014.61 3952.95-4955.5 7255.23 60.43 3375.58 1680.8 6291.51 5161.55 7052.54 1697.16 371.06 3545.13 284.81 5116.74-503.18 1216.27-609.83 2567.56-1786.86 3109-3056.12zm13802.46 0-2928.01-1451.38c-1017.73 1483.99-1758.21 2488.33-3897.08 1902.25-1678.91-460.05-2175.86-2300.18-2239.67-3843.76-87.18-2108.39 649.94-4543.46 3168.15-4413.24 1609.13 83.19 2294.74 1032.23 2661.15 1885.36l3196.99-1638.9c-1574.75-3004.31-5265.14-4026.05-8393.32-3188.81-3328.66 890.9-5014.61 3952.95-4955.5 7255.23 60.42 3375.58 1680.8 6291.51 5161.55 7052.54 1697.16 371.06 3545.13 284.81 5116.74-503.18 1216.27-609.83 2567.56-1786.86 3109-3056.12z"
            />
          </svg>
          License unless otherwise stated
        </a>
      </p>
      <p>
        <a
          href="https://www.instagram.com/_ada_network/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 3h10v2h5v16H2V7h2v12h16V7h-5V5H9v2H2V5h5V3zm7 12h-4v2h4v-2zm-4-2v2H8v-2h2zm0-2V9H8v2h2zm6 2v2h-2v-2h2zm0-2V9h-2v2h2z"
              fill="currentColor"
            />
          </svg>
          INSTAGRAM
        </a>
      </p>
      <p>
        <a
          href="https://www.facebook.com/ADA.net.nz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M2 3H0v18h24V3H2zm20 2v14H2V5h20zM10 7H6v4h4V7zm-6 6h8v4H4v-4zm16-6h-6v2h6V7zm-6 4h6v2h-6v-2zm6 4h-6v2h6v-2z"
              fill="currentColor"
            />
          </svg>
          METABOOK
        </a>
      </p>
      <p>
        <a
          href="https://www.powerplant.design"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z"
              fill="currentColor"
            />
          </svg>
          PWRPLNT.DSGN
        </a>
      </p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  padding: var(--spacing-6) var(--spacing-4) var(--spacing-8);
  margin: var(--spacing-2) var(--spacing-4) var(--spacing-16);
  border-radius: var(--borderRadius-large);
  background-color: black;
  font-size: 1rem;
  color: var(--color-white);
  line-height: 1;
  text-transform: uppercase;

  .footer-image {
    width: 100%;
  }

  svg {
    width: 11px;
    margin-inline-end: 0.2rem;
  }

  @media screen and (min-width: 940px) {
    padding: var(--spacing-2) var(--spacing-6);
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-4);

    span {
      display: none;
    }

    .footer-image {
      display: none;
    }
  }

  p {
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    font-size: 0.8rem;
  }

  a {
    color: var(--color-white);

    &:hover {
      color: var(--color-primary-bright);
    }
  }

  Link {
    display: inline;
  }
`

export default Footer
