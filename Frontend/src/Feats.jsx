import SocialMedia from "./SocialMedia";
import side1 from "./assets/side-eff.png"
import skillrack from "./assets/skillrack.jpg";
import leet from "./assets/leet.png";
import tcs from "./assets/tcs certificate.jpeg";
import freecodecamp from "./assets/freecodecamp certificate.png";
import guvi from "./assets/guvi.png";
import dev from "./assets/linkedin1.png";
import codsoft from "./assets/codsoft.png";
import java from "./assets/java.png";
import c from "./assets/c++.png";
import flipcard from "./assets/flipcard.png";
import css1 from "./assets/css1.png"

function Feats()
{
    const data = [
        {
            image:skillrack,
            head:'Skillrack Coding Profile - Solved 1700+ Problems',
        },
        {
            image:leet,
            head:'Leetcode Coding Profile - Solved 280+ Problems',
        },
        {
            image:tcs,
            head:'TCS Codevita - TCS codevita Season 11 round 1 cleared',
        },
        {
            image:freecodecamp,
            head:'Completed Responsive Web Design Course from freeCode Camp',
        },
        {
            image:guvi,
            head:'GenAI - Learn the basics of Generative AI by Guvi',
        },
        {
            image:dev,
            head:'Linkedin Learning - Completed the career development in Software Development',
        },
        {
            image:codsoft,
            head:'WebDevelopment Intern - Complete the one month Web Development Assignment based intern.',
        },
        {
            image:java,
            head:'Digilabs Learning - Learn the Java Basics From digilabs',
        },
        {
            image:c,
            head:'Digilabs Learning - Learn the c++ basics from digilabs'
        },
        {
            image:flipcard,
            head:'Flipcart Grid - Participate the level 1 of flipcart grid.'
        },
        {
            image:css1,
            head:'WebsiteLayout - I successfully completed the layout as part of the Web Designing Layouts certification'
        }
    ]
    const data_list = data.map((ele)=>
        <li>
            <div className="list">
                <img src={ele.image}></img>
                <p>{ ele.head }</p>
            </div>
        </li>
    )
    return(
        <div className="feats">
            <h1 className="name">Durga Devi</h1>
            <h1 className="feats-word">FEATURES</h1>
            <div className="features">
                <div className="data_list"><ul>{ data_list }</ul></div>
            </div>
            <img src={side1} className="side1"></img>
            <SocialMedia />
        </div>
    )
}

export default Feats;