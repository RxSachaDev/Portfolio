import '../styles/SoftSkills.css';

const SoftSkills: React.FC = () => {
    return (
        <div className="soft-skills">
            <div className="picture">
                <img src="./assets/moi-removebg.png" alt="" />
            </div>
            <div className="text">
                <h2>Soft Skills</h2>
                <h3>Esprit d’équipe</h3>
                <h3>Capacité d’adaptation</h3>
                <h3>Curiosité et envie d’apprendre</h3>
                <h3>Autonomie</h3>
                <h3>Patience et persévérance</h3>
            </div>
        </div>
    )
}

export default SoftSkills;