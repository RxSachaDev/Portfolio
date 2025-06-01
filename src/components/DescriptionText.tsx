import '../styles/DescriptionText.css';

const DescriptionText: React.FC = () => {
    return (
        <div className='description-text'>
            <p>Hello I am <span>Sacha</span></p>
            <p>I’m a <span>second-year Computer Science student</span> (BUT Informatique) passionate about <span>web development</span> and new technologies, with a preference for <span>React</span>. Outside of coding, I enjoy <span>tennis</span> and <span>music</span>.
            I’m currently looking for a <span>full-stack development internship</span> to grow my skills and contribute to innovative projects.</p>
        </div>
    )
}

export default DescriptionText;