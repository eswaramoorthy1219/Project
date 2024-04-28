import  {useState,useEffect} from "react"
import React from "react";
import Bus from "../Assets/bus.jpg"
import Back from "../Assets/B.jpg"
import Vijay from "../Assets/vijay.webp"
import Ajith from "../Assets/veeram.webp"
import Simbu from "../Assets/Simbu.webp"
import Danush from "../Assets/Danush.webp"
import Siva from "../Assets/Siva.webp"
import Vikram from "../Assets/vikram.webp"
import Rajini from "../Assets/Rajini.webp"
import Figma from "../Assets/Figma basics.jpg"
import DV from "../Assets/CDV.jpg"
import Spa from "../Assets/Brush.jpg"
import saloon from "../Assets/Saloon.jpg"
import Face from "../Assets/facebook.png"
import Insta from "../Assets/instagram.png"
import Threads from "../Assets/threads.png"
import Twitter from "../Assets/tweet.png"
import Header from "./Header"
function Franchise() {
    // const [marketSize, setMarketSize] = useState(0);

    // useEffect(() => {
    //     const target = 4567.89;
    //     const duration = 8000;

    //     const start = performance.now();
    //     let requestId;

    //     function updateCounter(timestamp) {
    //         const elapsed = timestamp - start;
    //         const progress = elapsed / duration;

    //         if (progress < 1) {
    //             const current = target * progress;
    //             setMarketSize(current.toFixed(2));
    //             requestId = requestAnimationFrame(updateCounter);
    //         } else {
    //             setMarketSize(target.toFixed(2));
    //         }
    //     }

    //     requestId = requestAnimationFrame(updateCounter);

    //     return () => cancelAnimationFrame(requestId);
    // }, []);
    return (
        <>
            <Header />
             <div className="Head-img">
                {/* <img src={Spa} /> */}
                <div className="Img-Text">
                    <h1>Saloon Franchise Opportunities</h1>
                </div>
            </div>
            <div className="About">
                <div className="About-Text">
                    <h3>why choose a tvl saloon franchisee</h3>
                    <p>
                        Fuelled by the vision of making beauty and styling accessible to all, an aspiration that was earlier restricted only to the privileged, FMCG giant CavinKare launched a first-of-its-kind professional, unisex salon chain “tvl saloon”.
                        tvl saloon transformed the landscape of salons and made beauty and styling aspirations a reality for all.
                    </p>
                    <p>
                        TVL SALOONS transformed the landscape of beauty parlours and salons, and made beauty and styling aspirations a reality for all.
                    </p>
                    <p>
                        With a vast network of 200+ franchisees partners, tvl saloons delivers its vision of accessible beauty and styling services to the far-reaching corners of the country with presence across 50+ cities. With scientifically designed services using world-class products delivered by certified skin and hair experts, tvl saloons caters to one’s head-to-toe grooming, beauty and styling needs at exceptional value.
                    </p>
                </div>
                <div className="Image">
                    <img src={saloon} />
                </div>
            </div>
            <div className="About-saloon" style={{ backgroundImage: `url(${Back})` }}>
                <h1>Saloon Industry Opportunity</h1>
                <p>
                    The beauty & salon industry in India has been recording double digit growths and is expected to continue in the same manner due to various factors such as rise in income levels, market penetration of organized sector and increased consumption. This growth has been primarily propelled by a tectonic shift in the Indian consumer psyche, where one’s self appearance has been given more important position than before. Looking good is no more seen as a luxury or occasional, rather as a necessary part of life. The rise in disposable incomes has further helped consumers fulfill their needs and spark of this lifestyle change. Also, the awareness towards beauty products and services is now at an all-time high in India, where consumers have specific expectations on quality and experience. This heightened awareness is attributed to exposure to global trends due to increase in internet penetration and social media. With the industry being largely unorganized, the potential for growth of professionally managed salons is only poised to grow further in the coming years.
                </p>
                <div className="Box-Div">
                    <div className="div1">
                        <div className="div1-cont">
                            <h6>Rs.4567.89 Billion</h6> {/* {marketSize} */}
                            <p>
                                Estimated<br></br>
                                market size
                            </p>
                        </div>
                    </div>
                    <div className="div2">
                        <div className="div2-cont">
                            <h6>18.40% CAGR</h6>
                            <p>
                                Rapidly<br></br>
                                growing industry
                            </p>
                        </div>
                    </div>
                    <div className="div3">
                        <div className="div3-cont">
                            <h6>8+ Million Saloons</h6>
                            <p>
                                60% of the market in India<br></br>
                                is still unorganized
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sec-Box">
                    <div className="div4">
                        <div className="div4-cont">
                            <h6>Avg.5 services availed</h6>
                            <p>Our services are increased
                                <br></br>
                                for our customer requests
                            </p>
                        </div>
                    </div>
                    <div className="div5">
                        <div className="div5-cont">
                            <h6>Avg. 42 min grooming time</h6>
                            <p>
                                Time spent per grooming<br></br>
                                amongesst male customer
                            </p>
                        </div>
                    </div>
                    <div className="div6">
                        <div className="div6-cont">
                            <h6>increased womens incomes</h6>
                            <p>
                                Fuelled by<br></br>
                                increase in job participation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="success">
                    <p>TVL saloon'6 steps to success</p>
                </div>
                <div className="sub-success">
                        <p  >Whether you’re a seasoned entrepreneur or a first-timer in the beauty industry, with green trends salon franchising, you’ve made the right choice. With over 18 years of knowledge and expertise in the beauty and salon industry, we foster an environment where you master the nuances of the salon business in no time.</p><br></br>
                        <p className="para">We pride ourselves in our well documented and structured business management processes that are time-tested and we offer a seamless orientation and continuous business management support that’s unmatched in the industry. We offer a complete 360 degree support right from setting up a salon which includes identifying property, rental negotiation, project drawing and salon set up support including manpower evaluation , training and up to opening of the salon. Further our support does not end with initial set up, regular business guidance, performance review, salon visits and audit process ensures a franchisee manages a salon efficiently irrespective of their knowledge levels of the business.</p>
                    <div className="Box-Divs">
                    <div className="Box-divs-First">
                    <div className="success-div1">
                    <p className="DCV">18+ years of business<br></br>
                        intelligence to equip<br></br>
                        your saloon's success
                        </p>
                    </div>
                    <div className="success-div2">
                        <p>
                            6-month breakeven<br></br>
                            potential with 360&deg;<br/>
                            business<br/>
                            Management support
                        </p>
                    </div>
                    <div className="success-div3">
                        <p>
                            Access to subsidised<br/>
                            authentic saloon<br/>
                            professional products<br/>
                            for rewarding profits
                        </p>
                    </div>
                    </div>
                    <div className="Box-divs-second">
                    <div className="success-div4">
                        <p className="PVC">
                        Strong brand power to <br/>
                        jumpstart your <br/>
                        business from Day 1
                        </p>
                    </div>
                    <div className="success-div5">
                        <p>
                            70% client repeats<br/>
                            enabled by<br/>
                            standarization saloon<br/>
                            operations SOP
                        </p>
                    </div>
                    <div className="success-div6">
                        <p>
                            Industry leading salon<br/>
                            management MIS<br/>
                            platform for effective<br/>
                            saloon management

                        </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="Business-Format">
                        <p className="Text">
                        The TVL Saloons Business Format
                        </p>
                        <div className="Business-Divs">
                    <div className="Business-divs-First">
                    <div className="Business-div1">
                    <p className="DCV">
                        Premium<br></br>
                        Unisex<br></br>
                        Format<br/>
                        <span>For Metro Cities</span>
                        </p>
                    </div>
                    <div className="Business-div2">
                        <p>
                            Classic<br/>
                            Unisex<br/>
                            Format<br/>
                            <span>For Metro/Major Cities</span>
                        </p>
                    </div>
                    <div className="Business-div3">
                        <p>
                            Studio<br/>
                            Format<br/>
                            <span>For Smaller Towns</span>
                        </p>
                    </div>
                    </div>
                    <div className="Business-divs-second">
                    <div className="Business-div4">
                        <p className="PVC">
                        32 - 55 lacs<br/>
                        <span>Investment</span>
                        </p>
                    </div>
                    <div className="Business-div5">
                        <p>
                            800-1800<br/>
                            sqft<br/>
                            <span>Saloon Size</span>
                        </p>
                    </div>
                    <div className="Business-div6">
                        <p>
                            36% ROI<br/>
                            <span>Estimated Per Year</span>
                        </p>
                    </div>
                    </div>
                    </div>
                    <img className="Photo"src={Bus} width="300px"/>
                    </div>
                    <div className="Franchise">
                        <h4>FRANCHISEE SUCCESS STORIES</h4>
                        <div className="Main-Back">
                        <div className="Back">
                            <h6>Vijay Owner of 20 Saloons in Tirunelveli ,Thoothukudi</h6>
                            <p>
                                Considering the competetion around us in this industry TVL Saloon franchise model has 
                                helped ass grow.We share a very strong and healthy relationship with the brand.
                                They treat every franchise with the same respecct and give same kind of support
                            </p>
                            <img src ={Vijay}/>
                        </div>
                        <div className="Back1">
                        <h6>Ajith Owner of 20 Saloons in Kanyakumari ,Madurai</h6>
                            <p>
                                Considering the competetion around us in this industry TVL Saloon franchise model has 
                                helped ass grow.We share a very strong and healthy relationship with the brand.
                                They treat every franchise with the same respecct and give same kind of support
                            </p>
                            <img src ={Ajith}/>
                        </div>
                        <div className="Back2">
                        <h6>Simbu Owner of 20 Saloons in virudhunagar, villupuram</h6>
                            <p>
                                Considering the competetion around us in this industry TVL Saloon franchise model has 
                                helped ass grow.We share a very strong and healthy relationship with the brand.
                                They treat every franchise with the same respecct and give same kind of support
                            </p>
                            <img src ={Simbu}/>
                        </div>
                        <div className="Back3">
                        <h6> Danush Owner of 20 Saloons in Thindukal, Theni</h6>
                            <p>
                                Considering the competetion around us in this industry TVL Saloon franchise model has 
                                helped ass grow.We share a very strong and healthy relationship with the brand.
                                They treat every franchise with the same respecct and give same kind of support
                            </p>
                            <img src ={Danush}/>
                        </div>
                        <div className="Back4">
                        <h6>Siva Owner of 20 Saloons in Salem ,Trichy</h6>
                            <p>
                                Considering the competetion around us in this industry TVL Saloon franchise model has 
                                helped ass grow.We share a very strong and healthy relationship with the brand.
                                They treat every franchise with the same respecct and give same kind of support
                            </p>
                            <img src ={Siva}/>
                        </div>
                        <div className="Back5">
                        <h6>Rajini Owner of 20 Saloons in Chennai ,Kancheeepuram</h6>
                            <p>
                                Considering the competetion around us in this industry TVL Saloon franchise model has 
                                helped ass grow.We share a very strong and healthy relationship with the brand.
                                They treat every franchise with the same respecct and give same kind of support
                            </p>
                            <img src ={Rajini}/>
                        </div>
                        <div className="Back6">
                        <h6>vikram Owner of 20 Saloons in  ,Madurai</h6>
                            <p>
                                Considering the competetion around us in this industry TVL Saloon franchise model has 
                                helped ass grow.We share a very strong and healthy relationship with the brand.
                                They treat every franchise with the same respecct and give same kind of support
                            </p>
                            <img src ={Vikram}/>
                        </div>
                        <div className="Back7">
                        <h6>Ajith Owner of 20 Saloons in Kanyakumari ,Madurai</h6>
                            <p>
                                Considering the competetion around us in this industry TVL Saloon franchise model has 
                                helped ass grow.We share a very strong and healthy relationship with the brand.
                                They treat every franchise with the same respecct and give same kind of support
                            </p>
                            <img src ={Ajith}/>
                        </div>
                        </div>
                    </div>
                     <div className="Brand">
                        <h1>Brand Ambassador</h1>
                        <img  src={DV}/>
                        <p>
                        <h2>MS DHONI <span style={{fontWeight:"400px"}}>about TVL SALOON,</span></h2>
                            Introducing a new venture by the cricketing legend, Mahendra Singh Dhoni – the MSDHONI Opening TVL Saloon, a haven for those seeking style and sophistication.
                            With a rich legacy of excellence both on and off the cricket field, MSDHONI brings his trademark precision and panache to the world of grooming. 
                            Step into our state-of-the-art saloon and experience the artistry of our expert stylists, who are dedicated to crafting the perfect look tailored to your individuality. 
                            From classic cuts to modern trends, we offer a range of services designed to elevate your grooming experience.
                            As MSDHONI himself once said, "Success comes to those who work hard and stay groomed!" So, whether you're gearing up for a big game or simply looking to elevate your everyday style, trust MSDHONI Opening TVL Saloon to deliver excellence with every snip and shave.
                            Welcome to a new era of grooming excellence – where style meets legend!
                        </p>
                    </div>
                    <div className="Mark">
                        <h1>New Branch Openings</h1>
                        <img src={Figma}/>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d492.9488621769577!2d77.73769612939569!3d8.730339432058898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411f9267e6e0d%3A0x862fd9be95b0406f!2s188%2C%20Tiruchendur%20Main%20Rd%2C%20near%20Palay%20Jawahar%20Ground%2C%20Palayamkottai%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627002!5e0!3m2!1sen!2sin!4v1714056497972!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    {/* <div className="Location">
                   
                    <div>
                        <h5>Sales Team</h5>
                        <p>Dubai</p>
                        <h5></h5>
                    </div>
                    </div> */}
                    
                    {/*<img  src={Vijay} style={{
                        left:"155px",
                        position:"relative",
                        // width:"900px",
                        // height:"1200px",
                        bottom:"300px",
                        borderRadius:"20px"
                    }}/>
                    <h1>OUR SUCCESSFUL LONGTIME PARTNERS</h1>
                    <img  src={Vijay} style={{
                        marginLeft:"350px",
                        marginBottom:"100px"
                    }}/>
                     <img  src={Vijay} style={{
                        marginLeft:"350px",
                        marginBottom:"30px"
                        
                    }}/> */}
                    </div>

            <div className="footer-franchisee" >
                <div>
                    <p>2024&copy;TVLSALOON PRIVATE LIMITED-TVL DIVISION</p>
                    <p>SITE BY TVLCODEZ</p>
                </div>

                <div className="franchisee-Social-media">
                    <a href="https://www.instagram.com/accounts/login/" target="_blank"><img src={Insta} /></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src={Face} /></a>
                    <a href="https://www.threads.net/login" target="_blank"><img src={Threads} /></a>
                    <a href="https://twitter.com/i/flow/login" target="_blank"><img src={Twitter} /> </a>
                </div>
            </div>
        </>
    )
}
export default Franchise

