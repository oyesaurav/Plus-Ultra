import React, { useEffect, useRef, useState } from "react";
// import "../../css/styles.css"

export default function Notice() {
  const [showNotice, setShow] = useState(false)
  const noticeRef = useRef(null)
  const timeTableRef = useRef(null)

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


    <p className="buttons">
      <button id="notice-button" onClick={toggle}>NOTICE</button>
      <button id="time-table-button" onClick={toggle}>TIME-TABLE</button>
    </p>

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