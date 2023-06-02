import React, { useEffect } from "react"

import Vivus from "vivus"


function Maintitle() {

    useEffect(() => {
      new Vivus('main-title',{duration:100, file:'svg/maintype_animated.svg'})
    }, [])
    
  return (
    <div id="main-title">

    </div>
  )
}

export default Maintitle