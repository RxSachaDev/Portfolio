import '../styles/DescriptionText.css';

const DescriptionText: React.FC = () => {
    return (
        <div className='description-text'>
            <p>Hello I am <span>Sacha</span></p>
            <p>I’m a <span>second-year Computer Science student</span> (BUT Informatique) passionate about <span>web development</span> and new technologies, with a preference for <span>React</span>. Outside of coding, I enjoy <span>tennis</span> and <span>music</span>.
            I’m actually in a <span>full-stack development internship</span> at ICAP - Université Claude Bernard.</p>
        </div>
    )
}

export default DescriptionText;