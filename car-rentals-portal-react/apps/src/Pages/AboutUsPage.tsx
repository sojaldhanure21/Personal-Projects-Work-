import React from "react"
import '../Styles/Styles Web/SCSS/AboutUS.css'

const techspianLogo = require('../assets/Techspian-Logo.png')
function AboutUS () {
    window.scrollTo(0, 0);
    return(
    <div className="about-us">
        <div className="aboutus-main">
            <div className="logo-head">
                {/* <img src={techspianLogo}/> */}
            <h1>ABOUT US</h1>
            </div>
            <h2>Who We Are</h2>
            <p>We are Techspian, born of the pandemic, challenging the status quo! We are professionals who craft software solutions that impact the way businesses work. Our dynamic team with diverse skills forms the right ingredients to produce quality work. Our compelling success stories range from industry acknowledged engineering solutions, to end-to-end digital transformation programs.</p>
        </div>
       <div className="founding-story">
        <h1>Founding Story</h1>
        <p>Techspian got incorporated in 2020 with the intent of spreading the power of technology. In one year, we grew to a more than 150 people team of technologists and product champions that help many travel businesses in their technology transformation .We work with businesses as their technology partners to help them realize their business plans and provides end-to-end support for every stage of product development, starting from discovery to supporting live systems. Techspian is now focusing on niche technology needs of today’s world like cloud, data science, automation by building a highly efficient Centre of Excellence for these technologies.</p>
        </div> 
    </div>
    )
}

export default AboutUS