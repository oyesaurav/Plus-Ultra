import React from "react";

export default function EditProfile() {

    return(
        <>
          <form>
              <label>Name:
                <input
                 name="Name"
                 type="text"
                 placeholder="Enter your Name"/>  
              </label>
              <br/>
              
              <label>Branch:
                <input
                 name="branch"
                 type="text"
                 placeholder="Enter your branch"/>  
              </label>
              <br/>

              <label>DOB:
                <input
                 name="DOB"
                 type="text"
                 placeholder="Enter your dob"/>  
              </label>
              <br/>
              
              <label>About:
                <textarea
                 placeholder="Enter about you"/>  
              </label>
              <br/>
              
              <label>Education:
                <textarea
                 placeholder="Enter about your edu"/>  
              </label>
              <br/>
              
              <label>Skills:
                <textarea
                 placeholder="Enter your skills"/>  
              </label>
              <br/>

              <label>upload your image:
                <input
                   type="file"/>
              </label>
              <br/>

              <button type="submit">Save</button>

          </form>
        </>
    )
}