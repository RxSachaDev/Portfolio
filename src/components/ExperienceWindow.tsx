import '../styles/ExperienceWindow.css';
import { ImCross } from "react-icons/im";

type ExperienceWindowProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    content: string;
    period: string;
    imageUrl: string;
    language: string;
    skills: string[];
    technologies: string[];
};

const ExperienceWindow: React.FC<ExperienceWindowProps> = ({open, onClose, title, content, period, imageUrl, language, skills, technologies}) => {
  if (!open) return null;  
  return (
    <div className="experience-window">
        <ImCross onClick={() => onClose()} className='cross' size={20}/>
        <div className="content">
            <img src={imageUrl} alt={title} />
            <div className="text">
                <h2>{title}</h2>
                <p>Stack(s) : {language}</p>
                <p>{content}</p>
                <h4>Period : {period}</h4>
                <p>Skills :</p>
                <ul>
                    {skills?.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <p>Technologies & tools : </p>
                <ul>
                    {technologies?.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default ExperienceWindow;