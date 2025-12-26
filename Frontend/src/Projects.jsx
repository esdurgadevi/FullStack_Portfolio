import { Link } from 'react-router-dom';
import Particle from './Particle';
import Github from "./assets/github (2).svg";
import p1 from "./assets/travel.png";
import p2 from "./assets/theatre.jpg"
import p3 from "./assets/book.png"
import p4 from "./assets/card.png"
import p5 from "./assets/event.png"
import p6 from "./assets/perfume.png"
import p7 from "./assets/food.png"
import p8 from "./assets/blog1.png"
import p9 from "./assets/todo.png"
import p10 from "./assets/todo1.png"
import p11 from "./assets/web.png"
import p12 from "./assets/cal.png"
function Projects()
{
    const projectsData = [
        {
            //completed
            title:'Travel Web Page',
            description: 'Developed a web application using HTML, CSS, and JavaScript that allows users to create, manage, and delete book notes efficiently.',
            githubLink: 'https://github.com/esdurgadevi/Travelora-Project',
            visitLink: 'https://travelora-hosting.web.app/',
            imageSrc:p1
        },
        {
            //Completed
            title:'Theatre Seat Booking Console Application',
            description: 'Developed a C++ console application to book theatre seats with a visual seat layout.',
            githubLink: 'https://github.com/esdurgadevi/C-Projects/tree/215402cca9663d129b903e9a6c765fa8bf983885',
            visitLink: 'https://github.com/esdurgadevi/C-Projects/tree/215402cca9663d129b903e9a6c765fa8bf983885',
            imageSrc: p2
        },
        {
            //Completed
            title:'Book Notes Application',
            description: 'Developed a web application using HTML, CSS, and JavaScript that allows users to create, manage, and delete book notes efficiently.',
            githubLink: 'https://github.com/esdurgadevi/MyProjects/tree/main/Book',
            visitLink: 'https://book-notes-webapp.web.app/',
            imageSrc: p3
        },
        {
            //completed
            title:'Time-Based Card Game',
            description: 'Designed a time-based card matching game using HTML, CSS, and JavaScript to find pairs before time runs out.',
            githubLink: 'https://github.com/esdurgadevi/MyProjects/tree/main/Card_game',
            visitLink: 'https://find-card-pair.web.app/',
            imageSrc:p4
        },
        {
            //completed
            title:'Event Landing Page',
            description: 'Developed an engaging event landing page using HTML and CSS to showcase event details and attract attendees.',
            githubLink: 'https://github.com/esdurgadevi/MyProjects/tree/main/event%20invite%20page(html)',
            visitLink: 'https://event-land-webapp.web.app/',
            imageSrc:p5
        },
        {
            //completed
            title:'Perfume Landing Page',
            description: 'Built a visually appealing landing page for a perfume brand using HTML and CSS',
            githubLink: 'https://github.com/esdurgadevi/MyProjects/tree/main/Perfume%20LandingPage',
            visitLink: 'https://perfume-webapp-48902.web.app/',
            imageSrc:p6
        },
        {
            //completed
            title:'Food Restaurant Landing Page',
            description: 'Designed an engaging landing page for a food restaurant using HTML and CSS to attract customers.',
            githubLink: 'https://github.com/esdurgadevi/MyProjects/tree/main/Landingpage%20Food',
            visitLink: 'https://food-land-webapp.web.app/',
            imageSrc:p7
        },
        {
            //completed
            title:'Blog Creation Website',
            description: ' Built a blog creation website using React and React Router, enabling users to create and navigate between blog posts.',
            githubLink: 'https://github.com/esdurgadevi/Blog_using_React',
            visitLink: 'https://create-blog-webapp.web.app/',
            imageSrc:p8
        },
        {
            //completed
            title:'To-Do List Project',
            description: 'Implemented a to-do list application using HTML, CSS, and JavaScript for task management.',
            githubLink: 'https://github.com/esdurgadevi/MyProjects/tree/main/todolist%20project',
            visitLink: 'https://todolist-cd-webapp.web.app/',
            imageSrc:p9
        },
        {
            //completed
            title:'Student To-do-List',
            description: 'Implemented a to-do list using HTML, CSS and javascript and we can delete and add the student name and other details',
            githubLink: 'https://github.com/esdurgadevi/MyProjects/tree/main/Student%20todolist',
            visitLink: 'https://student-todo-webapp.web.app/',
            imageSrc:p10
        },
        {
            //copleted
            title:'Website Creator Landing page',
            description: 'Using HTML, CSS create a landing page for website creator with home service and about page',
            githubLink: 'https://github.com/esdurgadevi/CODSOFT/tree/main/CODSOFT/Level1%20Task2',
            visitLink: 'https://webwizard-webapp.web.app/',
            imageSrc:p11
        },
        {
            //completed
            title:'Simple Calculator',
            description: 'Using HTML, CSS and javascript create a simple calculator for mathematical calculation',
            githubLink: 'https://github.com/esdurgadevi/CODSOFT/tree/main/CODSOFT/Level1%20Task3',
            visitLink: 'https://calculator-webapp-3888d.web.app/',
            imageSrc:p12
        }
    ];
    const list = projectsData.map((ele)=>
        <li>
            <div className="card">
                <div className="card-front">
                    <h3>{ele.title}</h3>
                    <img src={ele.imageSrc} className="bc"></img>
                    <hr></hr>
                    <p>{ele.description}</p>
                    <a href={ele.githubLink}><img src={Github} className="git"></img></a>
                    <a href={ele.visitLink} className="visit"><buttom>Visit</buttom></a>
                </div>
            </div>
        </li>
    )
    return(
        <div className="project">
            <h1 className="project-name">Durga Devi</h1>
            <div className="projects"><ul>{list}</ul></div>
            <div className="words">
                <h1 className='work'>WORK</h1>
                <h1 className='swipe'>Swipe..</h1>
            </div>
            <Particle />
        </div>
    )
}

export default Projects;