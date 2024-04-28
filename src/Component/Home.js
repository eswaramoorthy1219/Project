import React from "react";
import video from '../Assets/Section-1-Video.mp4'
import Header from "./Header";
import Pic from "../Assets/Offer-.png"
import { Link } from "react-router-dom"
import Saloon from "../Assets/Saloon.webp"
import { useState, useEffect } from "react";
function Home() {
    const [Name, setName] = useState("")
    const [opacity, setOpacity] = useState(1)
    useEffect(() => {
        setTimeout(() => {
            setName(
                <div className="Mount">
                    <div className="Mount-1">
                        <img src={Pic} />
                        {/* <p> Only Just Few Days</p> */}
                    </div>
                    <div className="Mount-2">
                        <p>On All Hair Cuts</p>
                    </div>
                    <span className="Context-head">It's Now or Never!</span>
                    <span className="Context-message">Act now to avail 50% of on all our branches</span>
                    <div className="Mount-3">
                        <button className="Right-btn">
                            <Link to="/contact" style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}>Avail Now
                            </Link></button>
                    </div>
                </div>)
            setOpacity(0.2)
        }, 3000)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setName("")
            setOpacity(1)
        }, 20000)
    }, [])
    const customStyle = {
        opacity: opacity
    }
    return (
        <>
            <div className="Video" >
                <Header />
                <video src={video} autoPlay loop muted style={customStyle}></video>
                <div className="Display" >
                    {Name}
                </div>
            </div>
        </>
    )
}
export default Home