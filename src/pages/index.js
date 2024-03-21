import React, { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import IndexLibrary from "../components/indexLibrary"
import IndexEvent from "../components/indexEvent"
import IndexArtbase from "../components/indexArtbase"
import FeaturedExhibit from "../components/indexFeaturedExhibit"
import IndexRandom from "../components/indexRandom"

const Home = () => {
  useEffect(() => {
    if (typeof document !== undefined) {
      // HEADER SCROLL STATE CHANGER https://css-tricks.com/styling-based-on-scroll-position/
      // The debounce function receives our function as a parameter
      const debounce = fn => {
        // This holds the requestAnimationFrame reference, so we can cancel it if we wish
        let frame

        // The debounce function returns a new function that can receive a variable number of arguments
        return (...params) => {
          // If the frame variable has been defined, clear it now, and queue for next frame
          if (frame) {
            cancelAnimationFrame(frame)
          }

          // Queue our function call for the next frame
          frame = requestAnimationFrame(() => {
            // Call our function and pass any params we received
            fn(...params)
          })
        }
      }

      // Reads out the scroll position and stores it in the data attribute
      // so we can use it in our stylesheets
      const storeScroll = () => {
        document.documentElement.dataset.scroll = window.scrollY
      }

      // Listen for new scroll events, here we debounce our `storeScroll` function
      document.addEventListener("scroll", debounce(storeScroll), {
        passive: true,
      })

      // Update scroll position for first time
      storeScroll()
    }
  })

  return (
    <Layout isHomePage>
      <Seo title="Homepage" />
      <IndexEvent />
      <FeaturedExhibit />
      <IndexLibrary />
      <IndexArtbase />
      <IndexRandom />
    </Layout>
  )
}

export default Home
