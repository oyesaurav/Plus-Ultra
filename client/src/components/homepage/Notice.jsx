import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import "../../css/styles.css"

export default function Notice() {
  const [showNotice, setShow] = useState(true)
  const noticeRef = useRef('')
  const timeTableRef = useRef('')

  function toggle() {
    setShow(!showNotice)
  }

  useEffect(() => {
    if(showNotice) {
      noticeRef.current.style.visbility = "visible"
      timeTableRef.current.style.visbility = "hidden"
    } else {
      noticeRef.current.style.visbility = "hidden"
      timeTableRef.current.style.visbility = "visible"
    }
  }, [showNotice])

  return (
    <div id="container-notice">



    <h1>Notice Board</h1>
    <div className="notice-div">
      <ul ref={noticeRef}>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam dicta adipisci itaque perspiciatis aliquid saepe ut dolor ducimus accusamus impedit odio, sapiente a animi.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam dicta adipisci itaque perspiciatis aliquid saepe ut dolor ducimus accusamus impedit odio, sapiente a animi.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam dicta adipisci itaque perspiciatis aliquid saepe ut dolor ducimus accusamus impedit odio, sapiente a animi.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam dicta adipisci itaque perspiciatis aliquid saepe ut dolor ducimus accusamus impedit odio, sapiente a animi.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam dicta adipisci itaque perspiciatis aliquid saepe ut dolor ducimus accusamus impedit odio, sapiente a animi.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam dicta adipisci itaque perspiciatis aliquid saepe ut dolor ducimus accusamus impedit odio, sapiente a animi.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam dicta adipisci itaque perspiciatis aliquid saepe ut dolor ducimus accusamus impedit odio, sapiente a animi.</li>
      </ul>
      <img src="../images/time-table.png" alt="" ref={timeTableRef} />
    </div>

    </div>
  )
}