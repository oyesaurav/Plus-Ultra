import React, {useState} from "react"
import Modal from 'react-modal'
// import array from './studentsData'

Modal.setAppElement('#root')
function Students(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const bgUrl = `../images/avatars/${props.Cover}`
    const coverImage = `url(${bgUrl})`
    
    const modalStyles = {
        // background: "grey",
        // left: "50px",
        height: "100%",
        // padding: "5px",
        position: "relative",
        width: '100%'
    }

    const source = "./images/avatars/" + props.Avatar + ".png"
    
    return (
        <div id="student-card">
            <img src={source} alt="img" />
            <h3 onClick={()=> {
                setModalIsOpen(true)
                // setId(props.Id)
            }}>{props.Name}</h3>
            <p>{props.Id}</p>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                overlay: {
                    // background: 'grey',
                    height: "50vh",
                    margin: "auto",
                    zIndex: "0",
                    padding: "200px 0",
                    position: "absolute",
                    top: "0",
                    width: "100%"
                },
                content: {
                    color: 'black',
                    textAlign: "center"
                }
                }}
                // shouldCloseOnOverlayClick={false}
            >
            <div style={modalStyles} className="container-modal">
            {/* AVATAR */}
                <div style={{
                    background: coverImage,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    height: "250px",
                    position: "relative"
                }}>
                    <img 
                    style={{
                        backgroundColor: "#FFF",
                        border: "5px solid #FFF",
                        borderRadius: "500px",
                        height: "fit-content",
                        position: "absolute",
                        padding: "0",
                        width: "200px",
                        top: "75px"
                    }}
                    src={source} 
                    alt="img" />
                </div>
                
                <div style={{
                    padding: "0 10px"
                }} id="student-details">
                    <h1 style={{
                        margin: "30px 0 0",
                        fontSize: "2.5rem"
                    }}>{props.Name}</h1>
                    <p>{props.Id}</p>
                    <p>{props.Email}<br/>{props.Contact}</p>
                    {/* ABOUT ME */}
                    <span>
                        <h2 style={{margin: "0", fontWeight: "700"}}>About me</h2>
                        <p style={{margin: "0"}}>{props.About}</p>
                    </span>
                    {/* SCHOOL */}
                    <span>
                        <h2 style={{margin: "20px 0 0", fontWeight: "700"}}>{props.Education}</h2>
                        <p style={{margin: "0 0 10px"}}>ABC Higher Secondary School</p>
                    </span>
                    {/* SKILLS */}
                    <span>
                        <h2 style={{margin: "20px 0 0", fontWeight: "700"}}>Skills</h2>
                        {props.Skills.map(skill => {
                        return <p style={{margin: "0"}} key={props.Id}>{skill}</p>
                    })}
                    </span>
                    {/* INTERESTS */}
                    <span>
                        <h2 style={{margin: "20px 0 0", fontWeight: "700"}}>Achievements</h2>
                        <p style={{margin: "0", padding: "0 0 20px 0"}}>{props.Achievements}</p>
                    </span>
                </div>
                

                <button 
                    style={{
                        background:"none", 
                        border: "none",
                        borderRadius:"50px",
                        cursor: "pointer",
                        height: "35px",
                        position: "fixed", 
                        right: "50px",
                        top: "25px", 
                        width: "35px"
                    }} 
                    onClick={() => setModalIsOpen(false)}><i className="fas fa-times"></i></button>
            </div>
            
            </Modal>

        </div>
    )
}

export default Students