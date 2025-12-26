import Particle from './Particle';
function About()
{
    return(
        <div className="about">
            <h1 className="project-name">Durga Devi</h1>
            <div className="about-box">
                <h4>
                I am an aspiring Frontend Developer with a strong passion for continuously learning and solving challenging problems in data structures and algorithms. I enjoy creating innovative projects, particularly in front-end development, where I design user-friendly and visually appealing websites. My logical thinking and technical curiosity drive me to approach challenges with creative solutions.
                <br></br>
                <br></br>
                Previously, I built enterprise-level software and developed an interest in scalable and elegant design. I’m a consistent and dedicated worker, always looking for opportunities to grow both professionally and personally.
                <br></br>
                <br></br>
In addition to my development skills, I efficiently use AI tools to enhance productivity and explore innovative solutions. I have a growing interest in machine learning and enjoy diving into its applications, experimenting with ideas that blend creativity and technology to solve real-world problems.
                </h4>
            </div>
            <div className="words">
                <h1 className="about-back">ABOUT</h1>
            </div>
            <Particle />
        </div>
    )
}

export default About;