import '../styles/Projects.css';
import Project from './Project';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2>My projects</h2>
             <div className="projects-container">
                <div className="left-projects">
                    <Project />
                    <Project />
                </div>
                <div className="right-projects">
                    <Project />
                    <Project />
                </div>
             </div>
        </div>
    )
}

export default Projects;