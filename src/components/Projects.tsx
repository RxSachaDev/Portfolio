import '../styles/Projects.css';
import Project from './Project';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2>My projects</h2>
             <div className="projects-container">
                <div className="left-projects">
                    <Project title='Project' content='Texte de description pour expliquer le projet' year={2024} imageUrl='./assets/tree.jpg' language='Java'/>
                    <Project title='Project' content='Texte de description pour expliquer le projet' year={2024} imageUrl='./assets/tree.jpg' language='Java'/>
                </div>
                <div className="right-projects">
                    <Project title='Project' content='Texte de description pour expliquer le projet' year={2024} imageUrl='./assets/tree.jpg' language='Java'/>
                    <Project title='Project' content='Texte de description pour expliquer le projet' year={2024} imageUrl='./assets/tree.jpg' language='Java'/>
                </div>
             </div>
        </div>
    )
}

export default Projects;