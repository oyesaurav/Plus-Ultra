import React from 'react'

export default function ContactUs() {
    return (
        <div className="container-contact-us">
            <div className="div-animated-json"><lottie-player id="animated-json" src="https://assets2.lottiefiles.com/packages/lf20_q8rluvbt.json"  background="transparent"  speed="1" loop autoplay></lottie-player></div>
            <form>
                <h1>Contact Us</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="ID" />
                <input type="email" placeholder="email" />
                <textarea placeholder="Your message" cols="30" rows="10"></textarea>
                <button onClick={e => e.preventDefault()}>Submit<lord-icon
                    id="submit-animated-icon"
                    src="https://cdn.lordicon.com/rhvddzym.json"
                    trigger="hover"
                    colors="primary:#ED50F1,secondary:#000"
                    style={{width:"30px", height:"30px"}}>
                </lord-icon></button>
            </form>
        </div>
    )
}
