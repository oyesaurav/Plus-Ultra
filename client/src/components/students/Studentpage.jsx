import React from "react";
import array from "./studentsData";
import Students from "./Students";
// import Nav from "../homepage/navbar";
import Footer from "../Footer";

function StudentPage() {

    const data = array.map(student => {
        return (
            <Students 
            key={student.id} 
            Id={student.id}
            Avatar={student.avatar}
            Cover={student.cover}
            Name={student.name}
            Branch={student.branch}
            DOB={student.DOB}
            About={student.about}
            Education={student.education}
            Skills={student.skills}
            Interests={student.interests}
            />
        )
    })
    
    return (
        
        <div className="container-home">
            {/* <Nav /> */}
            <div id="search-bar">
                <input type="text" />
                <button><i className="fas fa-search"></i></button>
            </div>
            <div className="container-students">

              {data} 

            </div>

            <Footer/>
        </div>
    )
}

export default StudentPage