import React from "react";
import Saloon from '../Assets/Sloon.jpg'
import Saloons from '../Assets/sloon2.jpg'
import Style from '../Assets/Stylist1.jpg'
import Style2 from '../Assets/Stylist2.jpg'
import Style3 from '../Assets/Stylist3.jpg'
import Style4 from '../Assets/Stylist4.jpg'
import Star from '../Assets/5Star-removebg.png'
import Star1 from '../Assets/4_star-removebg.png'
import Saloo from '../Assets/Saloon.jpg'
import Salon from '../Assets/Saloon.webp'
import Header from "./Header";

function About() {

    return (
        <>
            <Header />
            <div className="Container">
            <marquee>
               <p> We have Excited Offer for our Customers 50% off to all our loved Customers in our all over branches this valid only short time </p>
                </marquee>
            <h2>Our Saloon</h2>
                <div className="Images"  >
                    <img className="Board" src={Saloon} />&nbsp;&nbsp;
                    <img className="Board" src={Saloo} /> &nbsp;&nbsp;
                    <img className="Board" src={Salon} /> &nbsp;&nbsp;
                    <img className="Board" src={Saloons} />
                </div>
                <h3>WHO  WE'RE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo, molestias laudantium doloremque nisi provident quasi
                    pariatur ducimus, iure, quae sunt quidem aspernatur!
                    Inventore, magni laboriosam obcaecati et voluptatem
                    Cupiditate voluptatem debitis, eos, aliquid consequatur asperiores
                    exercitationem nobis est, vero ipsum voluptate. Nemo necessitatibus
                    placeat et tenetur? Provident, perspiciatis facere.</p>
            </div>
            <h1>Meet Our Experts</h1>
            <div className="TestImonials">
               
               <div className="Person">
                    <img src={Style} />  
                    <p><b>Name:</b>Sara</p>
                    <p><b>Role:</b>Womens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                    </div>
              
                <div className="Person">
                    <img src={Style2} />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>Mens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style3} height="180px" />
                    <p><b>Name:</b>Sharukh</p>
                   <p><b>Role:</b>childs hair stylist</p>
                   <p><b>Experience:</b>5 years </p> 
                   <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                </div>
                <div className="Person">
                    <img src={Style4} height="180px" />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>childs hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style} />  
                    <p><b>Name:</b>Sara</p>
                    <p><b>Role:</b>Womens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                    </div>
                    <div className="Person">
                    <img src={Style2} />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>Mens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style} />  
                    <p><b>Name:</b>Sara</p>
                    <p><b>Role:</b>Womens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                    </div>
              
                <div className="Person">
                    <img src={Style2} />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>Mens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style3} height="216px" />
                    <p><b>Name:</b>Sharukh</p>
                   <p><b>Role:</b>childs hair stylist</p>
                   <p><b>Experience:</b>5 years </p> 
                   <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                </div>
                <div className="Person">
                    <img src={Style4} height="216px" />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>childs hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style} />  
                    <p><b>Name:</b>Sara</p>
                    <p><b>Role:</b>Womens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                    </div>
                    <div className="Person">
                    <img src={Style2} />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>Mens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style} />  
                    <p><b>Name:</b>Sara</p>
                    <p><b>Role:</b>Womens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                    </div>
              
                <div className="Person">
                    <img src={Style2} />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>Mens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style3} height="180px" />
                    <p><b>Name:</b>Sharukh</p>
                   <p><b>Role:</b>childs hair stylist</p>
                   <p><b>Experience:</b>5 years </p> 
                   <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                </div>
                <div className="Person">
                    <img src={Style4} height="180px" />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>childs hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style} />  
                    <p><b>Name:</b>Sara</p>
                    <p><b>Role:</b>Womens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                    </div>
                    <div className="Person">
                    <img src={Style2} />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>Mens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style} />  
                    <p><b>Name:</b>Sara</p>
                    <p><b>Role:</b>Womens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                    </div>
              
                <div className="Person">
                    <img src={Style2} />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>Mens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style3} height="180px" />
                    <p><b>Name:</b>Sharukh</p>
                   <p><b>Role:</b>childs hair stylist</p>
                   <p><b>Experience:</b>5 years </p> 
                   <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                </div>
                <div className="Person">
                    <img src={Style4} height="180px" />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>childs hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
                <div className="Person">
                    <img src={Style} />  
                    <p><b>Name:</b>Sara</p>
                    <p><b>Role:</b>Womens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star1" src={Star1}/> </p>
                    </div>
                    <div className="Person">
                    <img src={Style2} />
                    <p><b>Name:</b>Sharukh</p>
                    <p><b>Role:</b>Mens hair stylist</p>
                    <p><b>Experience:</b>5 years </p>
                    <p><b>Ratings:</b><img id="Star" src={Star}/> </p>
                </div>
            </div>
            <div>
            </div>
            <div className="Footer">
                <p>TVL SALOON PRIVATE LIMITED -TVL DIVISIONS</p>
                <p>Designed By TVL Developers</p>
                <p><b>Locations</b>:Tirunelveli, Thoothukudi, Trichy, Madurai, Chennai </p>
                <p>Copyright@2024</p>
            </div> 
        </>
    )
}
export default About


