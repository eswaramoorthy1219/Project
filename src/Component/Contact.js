import React from "react";
import {useState} from "react"
import Header from "./Header";
import Face from "../Assets/facebook.png"
import Insta from "../Assets/instagram.png"
import Threads from "../Assets/threads.png"
import Twitter from "../Assets/tweet.png"
import Banner from "../Assets/Banner.jpg"
import Lap from '../Assets/Laptop.jpg'
function Contact() {
    const [inputValue,setInputValue]=useState({
        name:"",
        phone:"",
        email:"",
        city:"",
        message:"",
    })
    const [errors,setErrors]=useState({})
    const [Values,setValues]=useState([])

    const handleChange=(e) => {
       setInputValue({...inputValue,[e.target.name]:e.target.value})
    }
    const validation =(inputValue) => {
        let errors={};
        if(inputValue.name===""){
            errors.name="name is required"
        }
        else if (!/^[a-zA-Z]+$/.test(inputValue.name)){
            errors.name="only Alphabets"
        }
        else if(inputValue.name.length <= 3){
            errors.name="name is to short"
        }
        if(inputValue.phone===""){
            errors.phone="phone no is required"
        }
        else if (!/^\d{10}$/.test(inputValue.phone)) {
            errors.phone = "Enter a valid 10-digit phone number";
        }
        if(inputValue.email===""){
            errors.email="email is required"
        }
        else if (!/^\S+@\S+\.\S+$/.test(inputValue.email)) {
            errors.email = "Enter a valid email address";
        }    
        if(inputValue.city===""){
            errors.city="city is required"
        }
        if(inputValue.message===""){
            errors.message="enter a message"
        }
        setErrors(errors)

        return Object.keys(errors).length === 0;

    }
    const handleSubmit = (e) => {
        const isValid = validation(inputValue);
        if (isValid) {
            console.log("Form submitted:", inputValue);
            const  Tokens=[...Values,inputValue]
            setValues(Tokens)
            
            setInputValue({
                name: "",
                phone: "",
                email: "",
                city: "",
                message: ""
            });

            setErrors({});
            console.log(Tokens)
        }
    };
    return (
        <div className="Main-Div">
            <Header />
            
            <div className="Baner">
                <img src={Banner} />
                <div className="Text">
                    <p>Talk to us</p>
                </div>
            </div>
            <div className="Contact" style={{backgroundImage:`url(${Lap})`}}>
                <div> < img  className="Img"src={"https://www.mygreentrends.in/wp-content/themes/greentrends/images/location.png"}/></div>
                <div className="address">
                    <pre>
                        <a className="A" href="https://www.google.com/maps/place/188,+Tiruchendur+Main+Rd,+near+Palay+Jawahar+Ground,+Palayamkottai,+Tirunelveli,
                        +Tamil+Nadu+627002/@8.7300889,77.7380247,17z/data=!4m16!1m9!3m8!1s0x3b04
                        11f9267e6e0d:0x862fd9be95b0406f!2s188,+Tiruchendur+Main+Rd,+near+Palay+Jawahar+Ground,+Palayamkottai,+Tirunelveli,+Tamil+Nadu+627002!3b1!8m2!3d8.7271684!4d77.
                        7385981!10e5!16s%2Fg%2F11lly606h5!3m5!1s0x3b0411f9267e6e0d:0x862fd9be95b0406f!8m2!3d8.7271684!4d77.7385981!16s%2Fg%2F11lly606h5?authuser=0&entry=ttu">
                            No 188, Tiruchendur Road,<br/>
                            Palayamkottai,<br/>
                            Tirunelveli - 627002
                        </a>
                    </pre>
                    <div className="Mail">
                        <p><span>Customer care:</span><a href="mailto:CEO@Tvlsaloon.in">CEO@tvlsaloon.in</a></p>
                        <p><span>Careers:</span><a href="mailto:Careers@Tvlsaloon.in">Careers@tvlsaloon.in</a></p>
                        <p><span>Academy:</span><a href="mailto:tvlacademy@Tvlsaloon.in">tvlacademy@tvlsaloon.in</a></p>
                        <p><span>Franchising:</span><a href="mailto:franchisee@Tvlsaloon.in">franchisee@tvlsaloon.in</a></p>
                    </div>
                </div>
                <div className="HLine"></div>
                <div className="Div">
                    <p>Contact Us</p>
                    <div>
                        <label>Name:</label>
                       <input type="text" name="name" value={inputValue.name} onChange={handleChange}/>
                       {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div>
                        <label>Moble No:</label>
                        <input type="number" name="phone" value={inputValue.phone}onChange={handleChange}/>
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                    <div>
                        <label>EMail ID:</label>
                        <input type="text" name="email" value={inputValue.email}onChange={handleChange}/>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <label>City:</label>
                        <input type="text" name="city" value={inputValue.city} onChange={handleChange}/>
                        {errors.city && <span className="error">{errors.city}</span>}
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea name="message" value={inputValue.message}onChange={handleChange}></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <div>
                        <label>Attach File:</label>
                       <input type="file"/>
                    </div>
                    <div className="Submit">
                        <input type="submit" onClick={handleSubmit}/>
                    </div>
                </div>
            </div> 

            <div className="footer">
                <div>
                <p>2024&copy;TVLSALOON PRIVATE LIMITED-TVL DIVISION</p>
                <p>SITE BY TVLCODEZ</p>
                </div>
                
                <div className="Social-media">
                    <a href="https://www.instagram.com/accounts/login/" target="_blank"><img src={Insta}/></a> 
                    <a href="https://www.facebook.com/" target="_blank"><img src={Face}/></a>  
                    <a href="https://www.threads.net/login" target="_blank"><img src={Threads}/></a>
                    <a href="https://twitter.com/i/flow/login" target="_blank"><img src={Twitter}/> </a>  
                </div>
            </div>
           
        </div>
    )
}
export default Contact;

