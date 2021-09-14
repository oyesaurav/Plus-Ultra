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
                    placeholder="Enter your Name"/>  
                </span>
                {/* <br /> */}
                
                <span id="edit-branch"><label>Branch:</label><br/>
                    <input
                    name="branch"
                    type="text"
                    placeholder="Enter your branch"/>  
                </span>
              </div>
              
              {/* SECITON-2 */}
              <div className="section-2">
                <span id="edit-dob"><label>Date of Birth:</label> <br />
                    <input
                    name="DOB"
                    type="text"
                    placeholder="Enter your dob"/>  
                </span>

                <span id="edit-image"><label>Upload your image:</label><input type="file"/></span>
              </div>
              
              <br/>
              
              <label>About: <br />
                <textarea
                 placeholder="Enter about you"/>  
              </label>
              <br/>
              
              <label>Education: <br />
                <textarea
                 placeholder="Enter about your edu"/>  
              </label>
              <br/>
              
              <label>Skills: <br />
                <textarea
                 placeholder="Enter your skills"/>  
              </label>
              <br/>


              <p><button type="submit">Save</button></p>

          </form>
          <div className="container-home"><Footer /></div>
        </div>
    )
}