import '../styles/Projects.css';
import Project from './Project';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2>My projects</h2>
             <div className="projects-container">
                <div className="left-projects">
                    <Project title='AIR CONCESS' content="AIR CONCESS is a fictional company offering aircraft for sale. This project, carried out as part of a school assignment, aimed to put our web development skills into practice through the creation of a complete e-commerce website. It showcased and sold aircraft, offered private pilot license (PPL) training, and included a maintenance service. This project allowed us to cover all the stages of designing an e-commerce site, from development to service management, while applying technical skills to meet a concrete business need." year={2025} imageUrl='./assets/AirConcess.png' language='React, PHP' technologies={["AGILE", "Gitlab", "Git Flow", "MVC"]}/>
                    <Project title='FFR Plane' content='This application, developed in Java Swing, is designed to manage the French air traffic network, detect potential conflicts between flights that may collide, and automatically propose adjustments to their flight levels. It is based on graph theory, specifically graph coloring, to assign distinct altitudes to conflicting flights. This project was carried out as part of a school assignment and allowed us to apply concepts in algorithms, mathematical modeling, and graphical user interface development.' year={2024} imageUrl='./assets/ffr_plane.png' language='Java (Swing)' technologies={["Graphstream", "Coloration Algorithms", "Gitlab", "MVC"]}/>
                </div>
                <div className="right-projects">
                    <Project title='Listify' content="Listify is a web application dedicated to managing shopping lists. Designed to address the needs of consumers during times of inflation, it helps organize and optimize purchases to reduce waste and better manage food budgets. This project was developed as part of a university assignment, aiming to apply our web development skills while tackling a real and relevant issue. It allowed us to work through the entire application creation process, from design to implementation, incorporating both technical challenges and actual user needs." year={2025} imageUrl='./assets/Listify.png' language='Twig, Php Symfony' technologies={["AGILE", "MVC"]}/>
                </div>
             </div>
        </div>
    )
}

export default Projects;