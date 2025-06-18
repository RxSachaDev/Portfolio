import '../styles/SoftSkills.css';

const SoftSkills: React.FC = () => {
    return (
        <div className="soft-skills">
            <div className="picture">
                <img src="./assets/moi-removebg.png" alt="" />
            </div>
            <div className="text">
                <h2>Soft Skills</h2>
                <h3>Team spirit</h3>
                <h3>Adaptability</h3>
                <h3>Curiosity and eagerness to learn</h3>
                <h3>Autonomy</h3>
                <h3>Patience and perseverance</h3>
            </div>
        </div>
    )
}

export default SoftSkills;