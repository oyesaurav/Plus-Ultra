import React from "react";
import Nav from "../../components/navbar";
import Notice from "../../components/noticeTemp";
import "../../Css/styles.css"

class Home extends React.Component 
{
   render()
   {
       return (
           <div>
               <Nav />

               <div className="NoticeBoard blog-card">
                   <Notice />
                   <Notice />
               </div>
           </div>
       )
   }
}

export default Home