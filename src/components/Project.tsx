import '../styles/Project.css';
import ProjectWindow from './ProjectWindow';
import { useState } from 'react';

type ProjectProps = {
    title: string;
    content: string;
    year: number;
    imageUrl: string;
    videoUrl: string;
    language: string;
    technologies: string[];
};

const Project: React.FC<ProjectProps> = ({ title, content, year, imageUrl, videoUrl, language, technologies }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="project" onClick={() => setOpen(true)}>
                <div className="content">
                    <img src={imageUrl} alt={title} />
                    <h3>{title}</h3>
                    <div className="text">
                        <p>{content}</p>
                        <h4>{year}</h4>
                    </div>
                </div>
            </div>
            <ProjectWindow
                open={open}
                onClose={() => setOpen(false)}
                title={title}
                content={content}
                year={year}
                imageUrl={videoUrl}
                language={language}
                technologies={technologies}/>
        </>
        
    );
};

export default Project;