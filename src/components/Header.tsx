import '../styles/Header.css';
import { useColorStore } from '../store/ColorStore';

const Header: React.FC = () => {
    const { colors, currentColor, setCurrentColor } = useColorStore();

    return (
        <header>
            <h1>RxSachaDev's Portfolio</h1>
            <div className="right-header">
                <div className="container">
                    <input type="checkbox" name="checkbox" id="checkbox" defaultChecked/>
                    <label htmlFor="checkbox" className="label"> </label>
                </div>
                <div className="color-picker">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="color-box"
                            style={{ backgroundColor: color, border: color === currentColor ? '2px solid #fff' : undefined }}
                            onClick={() => setCurrentColor(color)}
                        ></div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header;