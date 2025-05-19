import './Header.css';
import { useState } from 'react';

const Header: React.FC = () => {
    const [colors, setColors] = useState(["#2BF07A", "#F22222", "#B044F7", "#2A5BFC", "#FFDD33"])
    const [currentColor, setCurrentColor] = useState(colors[0]);

    return (
        <header>
            <h1>RxSachaDev's Portfolio</h1>
            <div className="right-header">
                <div className="container">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="label"> </label>
                </div>
                <div className="color-picker">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="color-box"
                            style={{ backgroundColor: color }}
                            onClick={() => setCurrentColor(color)}
                        ></div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header;