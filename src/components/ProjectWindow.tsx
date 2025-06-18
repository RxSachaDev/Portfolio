import '../styles/ProjectWindow.css';
import { ImCross } from "react-icons/im";

type ProjectWindowProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    content: string;
    year: number;
    imageUrl: string;
    language: string;
    technologies: string[];
};

const ProjectWindow: React.FC<ProjectWindowProps> = ({open, onClose, title, content, year, imageUrl, language, technologies}) => {
  if (!open) return null;  
  return (
    <div className="project-window">
        <ImCross onClick={() => onClose()} className='cross' size={20}/>
        <div className="content">
            <img src={imageUrl} alt={title} />
            <div className="text">
                <h2>{title}</h2>
                <p>Langage(s) : {language}</p>
                <p>{content}</p>
                <h4>{year}</h4>
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

export default ProjectWindow;