import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = ({ isHomePage }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavButton open={open} onClick={() => setOpen(!open)}>
        {open ? (
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 5H4v2h16V5zm0 4H4v2h16V9zM4 13h16v2H4v-2zm16 4H4v2h16v-2z"
              fill="currentColor"
            />
          </svg>
        )}
      </NavButton>

      <Nav className="nav-global" open={open}>
        <div className="nav-wrapper">
          <Link
            // to="/"
            to={isHomePage ? "#" : "/"}
            className={isHomePage ? "nav-link nav-link-home" : "nav-link"}
            activeClassName="nav-link--active"
            onClick={() => setOpen(false)}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z"
                fill="currentColor"
              />
            </svg>
            Home
          </Link>

          <Link
            // to={isHomePage ? "#content-home" : "/"}
            to="/artbase/"
            className="nav-link"
            activeClassName="nav-link--active"
            onClick={() => setOpen(false)}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 6h8v2H8V6zm-4 4V8h4v2H4zm-2 2v-2h2v2H2zm0 2v-2H0v2h2zm2 2H2v-2h2v2zm4 2H4v-2h4v2zm8 0v2H8v-2h8zm4-2v2h-4v-2h4zm2-2v2h-2v-2h2zm0-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 0V8h-4v2h4zm-10 1h4v4h-4v-4z"
                fill="currentColor"
              />
            </svg>
            Artbase
          </Link>

          <Link
            to="/events/"
            className="nav-link"
            activeClassName="nav-link--active"
            onClick={() => setOpen(false)}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4V2zM7 6h12v2H5V6h2zM5 20V10h14v10H5zm6-4v-4H7v4h4z"
                fill="currentColor"
              />
            </svg>
            Events
          </Link>

          <Link
            to="/library/"
            className="nav-link"
            activeClassName="nav-link--active"
            onClick={() => setOpen(false)}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"
                fill="currentColor"
              />
            </svg>
            Library
          </Link>

          <Link
            to="/tag/"
            className="nav-link"
            onClick={() => setOpen(false)}
            activeClassName="nav-link--active"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"
                fill="currentColor"
              />
            </svg>
            Search
          </Link>

          <Link
            to="/about/about-aotearoa-digital-arts/"
            className="nav-link"
            activeClassName="nav-link--active"
            onClick={() => setOpen(false)}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 2h10v2h8v14H11v-2H5v6H3V2zm2 12h8v2h6V6h-8V4H5v10z"
                fill="currentColor"
              />
            </svg>
            About
          </Link>

          <Link
            to="/subscribe/"
            className="nav-link"
            activeClassName="nav-link--active"
            onClick={() => setOpen(false)}
          >
            Subscribe
          </Link>
        </div>
      </Nav>
    </>
  )
}

const NavButton = styled.button`
  position: fixed;
  bottom: 0.4rem;
  right: 0.4rem;
  z-index: 777;
  outline: none;
  border: none;
  border-spacing: 0;
  background: var(--color-transparent);
  /* color: ${({ open }) =>
    open ? "var(--color-primary-light)" : "var(--color-black)"}; */

  body {
    overflow-x: hidden;
  }

  svg {
    transition: color 300ms;
  }

  @media screen and (min-width: 880px) {
    display: none;
  }
`

const Nav = styled.nav`
  font-family: var(--fontFamily-display);
  position: fixed;
  background: var(--color-bg);
  padding: var(--spacing-2) var(--spacing-4) var(--spacing-1);
  inset: 0;
  z-index: 666;
  transition: 200ms ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid var(--color-black);

  a {
    white-space: pre;
    color: var(--color-black);
  }

  .nav-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  svg {
    display: inline;
    width: 38px;
    margin-inline-end: 1rem;
    margin-block-end: 0.2rem;
  }

  .nav-link {
    line-height: 1;
    font-size: 2.2rem;
    padding: 0.6rem 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    transition: background 400ms, color 400ms, border 400ms, box-shadow 400ms;
    border-radius: 3rem;
    border: 1px solid var(--color-trans);

    &--active {
      color: var(--color-primary-light);
      background: var(--color-black);
      border: 1px solid var(--color-black);
      pointer-events: none;
    }
  }

  @media screen and (min-width: 940px) {
    border: none;
    border-bottom: 1px solid var(--color-transparent);
    transform: translateX(0);
    position: sticky;

    .nav-wrapper {
      flex-direction: row;
      gap: 0.4rem;
    }

    .nav-link {
      font-size: 1em;
      padding: 0.4rem 0.6rem;
      animation: font-loader 1500ms 1 normal 10ms both;

      &:hover {
        color: var(--color-black);
        background: var(--color-white);
        border: 1px solid var(--color-black);
        box-shadow: 0 0 20px var(--color-primary-light);
      }
    }

    svg {
      width: 14px;
      height: 14px;
      margin-block-end: 0.1rem;
      margin-inline-end: 0.4rem;
    }
  }
`

export default Navigation
