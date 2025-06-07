import '../styles/Contact.css';

const Contact: React.FC = () => {
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <p>Feel free to <span>contact me</span> for any <span>proposal</span> or <span>questions</span> about my projects !</p>
            <a href="mailto:sacha.roux38@gmail.com">
                <button type="button">Contact me</button>
            </a>
        </div>
    )
}

export default Contact;