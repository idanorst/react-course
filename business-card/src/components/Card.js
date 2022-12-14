import React from 'react'
import "../style.css"
import image from "../images/profile-image.JPG"
import twitterLogo from "../images/twitter.png"
import facebookLogo from "../images/facebook.png"
import instagramLogo from "../images/instagram.png"
import emailLogo from "../images/email.png"
import githubLogo from "../images/github.png"
import linkedInLogo from "../images/linkedin.png"

export default function Card() {
    return (
        <div className="card">
            <img alt="profile image" className="card--profile-img" src={image}/>
            <div className="card--info-container">
                <h2 className="card--name">Ida Norstrøm</h2>
                <h4 className="card--work">Frontend Developer</h4>
                <h4 className="card--website">www.Norstrøm.net</h4>
                <div className="card--button-container">
                    <button className="card--email-button"><img src={emailLogo}/><a href='norstrom.ida@gmail.com'>Email</a></button>
                    <button className="card--linkedIn-button"><img src={linkedInLogo}/><a href='https://www.linkedin.com/in/ida-norstr%C3%B8m-558a0516a/' target="_blank">LinkedIn</a></button>
                </div>
                <div className="card--info">
                    <h3>About</h3>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I am always looking for new things to learn.</p>
                    <h3>Interests</h3>
                    <p>Food expert. Coffee fanatic. Sports enthusiast. Training geek. Nature lover. Dog freek.</p>
                </div>
            </div>
            <div className="card--link-container">
                <a href='https://twitter.com/idanorstrom1' target="_blank"><img src={twitterLogo}/></a>
                <a href='https://www.facebook.com/norstrom.ida' target="_blank"><img src={facebookLogo}/></a>
                <a href='https://www.instagram.com/idanorstrom1/' target="_blank"><img src={instagramLogo}/></a>
                <a href='https://github.com/idanorst' target="_blank"><img src={githubLogo}/></a>
            </div>
            
        </div>
    )
}