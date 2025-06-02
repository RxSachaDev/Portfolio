import '../styles/Project.css';

const Project: React.FC = () => {
    return (
        <div className="project">
             <div className="content">
                <div className="picture"></div>
                <h3>Project</h3>
                <div className="text">
                    <p>Texte de description pour expliquer le projet</p>
                    <h4>/Année</h4>
                </div>
             </div>
        </div>
    )
}

export default Project;