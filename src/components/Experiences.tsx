import '../styles/Experiences.css';
import Experience from './Experience';

const Experiences: React.FC = () => {
    return (
        <div className="experiences">
            <h2>My experiences</h2>
            <div className="experiences-container">
                <Experience title="Stage - ICAP, Université Claude Bernard Lyon 1" content="I worked on the independent project Videodiag, aimed at improving the accessibility of educational videos. The main objective was to analyze videos to detect accessibility issues and assist teachers in applying best practices to make their content more accessible. This project is part of an effort to integrate with the university’s video platform, enabling users to diagnose and independently improve the pedagogical quality of their videos." period="14/04/2025 - 4/07/2025" imageUrl="./assets/icap.jpg" language="Python" skills={["AC15.01 - Design and develop communicating applications", "AC16.03 - Identify the status, functions, and roles of each team member", "AC21.01 - Develop and implement functional specifications", "AC21.03 - Adopt good design and programming practices", "AC23.01 - Identify the business needs of clients and users", "AC25.02 - Formalize client and user requirements", "AC31.01 - Choose and implement appropriate architectures"]} technologies={["Gitlab", "CI/CD", "SCRUM", "OpenCV", "FPDF", "Gradio"]}/>
            </div>
        </div>
    )
}

export default Experiences;