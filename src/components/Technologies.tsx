import '../styles/Technologies.css';
import '../styles/Technologies.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaPython, FaJava } from "react-icons/fa";

const icons = [
  <FaHtml5 size={200} key="html5" />,
  <FaCss3Alt size={200} key="css3" />,
  <FaJs size={200} key="js" />,
  <FaReact size={200} key="react" />,
  <FaVuejs size={200} key="vue" />,
  <FaPython size={200} key="python" />,
  <FaJava size={200} key="java" />,
];

const ICON_WIDTH = 200; // px
const ICON_HEIGHT = 200; // px

const Technologies: React.FC = () => {
  return (
    <div className="technologies">
        <h2>Skills</h2>
        <div
        className="slider"
        style={{
            "--width": `${ICON_WIDTH}px`,
            "--height": `${ICON_HEIGHT}px`,
            "--quantity": icons.length,
        } as React.CSSProperties}
        >
        <div className="list">
            {icons.map((icon, i) => (
            <div
                className="item"
                style={{ "--position": i + 1 } as React.CSSProperties}
                key={i}
            >
                <div className="icon-wrapper">{icon}</div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Technologies;