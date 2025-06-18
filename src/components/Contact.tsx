import '../styles/Contact.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Contact: React.FC = () => {
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <p>Feel free to <span>contact me</span> for any <span>proposal</span> or <span>questions</span> about my projects !</p>
            <a href="mailto:sacha.roux38@gmail.com">
                <button type="button">Contact me</button>
            </a>
            <div className="networks">
                <a href="https://github.com/RxSachaDev" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} />
                </a>
                <a href="https://www.linkedin.com/in/sacha-roux-6795a4296/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} />
                </a>
            </div>
        </div>
    )
}

export default Contact;