import '../styles/Projects.css';
import Project from './Project';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2>My projects</h2>
             <div className="projects-container">
                <div className="left-projects">
                    <Project title='AIR CONCESS' content="AIR CONCESS est une entreprise proposant des avions à vendre. Ce projet consiste à la réalisation d'un site marchand proposant la vente d'avion, la formation PPL et un service de maintenance" year={2025} imageUrl='./assets/AirConcess.png' language='React, PHP'/>
                    <Project title='FFR Plane' content='Cette application développée en Java Swing a pour but de gérer le parc aérien français, de repérer les vols qui vont entrer en collision, et de rectifier leur niveau de vol. Elle utilise la théorie des graphes et de la coloration.' year={2024} imageUrl='./assets/ffr_plane.png' language='Java (Swing)'/>
                </div>
                <div className="right-projects">
                    <Project title='Listify' content="Listify est une application web dédiée à la gestion des listes de courses. Conçue pour répondre aux besoins des consommateurs en période d'inflation, elle permet d'organiser et d'optimiser les achats afin d'éviter le gaspillage et de mieux gérer le budget alimentaire. (développée dans le cadre d'un projet universitaire)" year={2025} imageUrl='./assets/Listify.png' language='Twig, Php Symfony'/>
                </div>
             </div>
        </div>
    )
}

export default Projects;