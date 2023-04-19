import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

const ThursdayTrader = () => {
  useEffect(() => {
    const gameTable = document.getElementById("gameTable")
    const styleLink = document.createElement("link")
    styleLink.rel = "stylesheet"
    styleLink.href = "../src/assets/ThursdayTrader/ThursdayTrader_files/main.css"
    gameTable.appendChild(styleLink)
    const jqueryScript = document.createElement("script")
    jqueryScript.src = "src/assets/ThursdayTrader/ThursdayTrader_files/jquery-3.4.1.min.js"
    gameTable.appendChild(jqueryScript)
    const mainScript = document.createElement("script")
    mainScript.src = "src/assets/ThursdayTrader/ThursdayTrader_files/main.js"
    gameTable.appendChild(mainScript)
  }, [])

  return (
    <>
      <Helmet>
        <title>Game Page</title>
      </Helmet>
      <div id="gameTable">
        hi
        {/* <iframe src ='src/assets/ThursdayTrader/index.html'></iframe> */}
        
        {/* <iframe src ='https://raw.githubusercontent.com/harriet-waldron/TheThursdayTrader-Static/main/index.html'></iframe> */}
        {require("../../src/assets/ThursdayTrader/index.html")}
      </div>
    </>
  )
}

export default ThursdayTrader