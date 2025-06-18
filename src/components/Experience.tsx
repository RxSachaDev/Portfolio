import '../styles/Experience.css';
import { useState } from 'react';
import ExperienceWindow from './ExperienceWindow';

type ExperienceProps = {
    title: string;
    content: string;
    period: string;
    imageUrl: string;
    language: string;
    skills: string[];
    technologies: string[];
};
const Experience: React.FC<ExperienceProps> = ({title, content, period, imageUrl, language, skills, technologies}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="experience" onClick={() => setOpen(true)}>
                <img src={imageUrl} alt={title} />
                <h3>{title}</h3>
            </div>
            <ExperienceWindow
                    open={open}
                    onClose={() => setOpen(false)}
                    title={title}
                    content={content}
                    period={period}
                    imageUrl={imageUrl}
                    language={language}
                    skills={skills}
                    technologies={technologies}/>
        </>
    )
}

export default Experience;