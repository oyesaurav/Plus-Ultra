import React from "react";

import StudentDetails from "./studentsData";
import Students from "./Students";

import Nav from "../homepage/navbar";
import Footer from "../Footer";

function StudentPage() {
    const data = StudentDetails.map(student => {
    return (
        <Students 
          key={student.id} 
          id={student.id}
          Name={student.Name}
          Branch={student.Branch}
          DOB={student.DOB}
          Email={student.Email}
          Interest={student.Interest}
        />
    )
})
    
    return (
        
        <div>
            <div className="container-home">
              <Nav />
          
              {data} 

              <Footer/> 
            </div>          
        </div>
    )
}

export default StudentPage