
import { Link } from 'react-router-dom';
import  Resume  from './assets/CV.png';
import Circle from './assets/circle1.jpg';
function Page()
{
    return(
        <div className="page">
            <h2 className="name">Durga Devi S</h2>
            <div className="side">
                <a href={ Resume } target="_blank"><p className="project-head">Resume</p></a>
                <Link to="/project">
                    <p className="project-head">Projects</p>
                </Link>
            </div>
            <div className="center">
                <img src={ Circle }></img>
            </div>
            <div className="bottom">
                <Link to="/about">
                    <p>About</p>
                </Link>
                <Link to="/skills">
                    <p>Skills</p>
                </Link>
            </div>
            <div className="right">
                <Link to="/feats">
                <p>Feats</p>
                </Link>
            </div>
        </div>
    )
}

export default Page;