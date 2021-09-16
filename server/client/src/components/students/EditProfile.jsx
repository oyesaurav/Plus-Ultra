import React from "react";
import Footer from '../Footer'

export default function EditProfile() {

    return(
        <div className="container-edit-profile">
          <h1>Edit your details</h1>
          <form>
              {/* SECTION-1 */}
              <div className="section-1">
                <span><label>Name:</label><br/>
                    <input
                    name="Name"
                    type="text"
                    placeholder="Enter your name"/>  
                </span>
                {/* <br /> */}
                
                <span id="edit-branch"><label>Email:</label><br/>
                    <input
                    name="branch"
                    type="email"
                    placeholder="Enter your email"/>  
                </span>
              </div>
              
              {/* SECITON-2 */}
              <div className="section-2">
                <span id="edit-dob"><label>Contact:</label> <br />
                    <input
                    name="contact"
                    type="text"
                    placeholder="Enter your contact"/>  
                </span>

                <span id="edit-image"><label>Upload your resume:</label><input type="file"/></span>
              </div>
              
              <br/>
              
              <label>About: <br />
                <textarea
                 placeholder="Enter about you"/>  
              </label>
              <br/>
              
              <label>Achievements: <br />
                <textarea
                 placeholder="Add to your achievements"/>  
              </label>
              <br/>
              
              <label>Skills: <br />
                <textarea
                 placeholder="Add to your skills"/>  
              </label>
              <br/>

              <p><button type="submit">Save</button></p>

          </form>
          <div className="container-home"><Footer /></div>
        </div>

    )
}