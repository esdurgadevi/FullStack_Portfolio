import  Linkedin from "./assets/linkedin.svg";
import Github from "./assets/github (2).svg";
import Leetcode from "./assets/leetcode.svg";

function SocialMedia()
{
    return(
        <div className="socialmedia">
            <div>
                <a className="link" href="https://www.linkedin.com/in/esdurgadevi/" target="_blank"><img src = {Linkedin}></img></a>
                <a className="link" href="https://github.com/esdurgadevi" target="_blank"><img src = {Github}></img></a>
                <a className="link" href="https://leetcode.com/u/esdurgadevi/" target="_blank"><img src={ Leetcode }></img></a>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default SocialMedia;