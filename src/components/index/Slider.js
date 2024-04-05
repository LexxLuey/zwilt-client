import { useEffect, useState, useRef } from "react";
import logo from '../../images/portrait-charming-attractive-young-african-american-female-with-voluminous-afro-haircut-with-broad-confident-smile-keeping-her-arms-folded-chest-wearing-striped-nightgown 1.png'

const colors = ["#fff", "#fff", "#fff"];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundColor }}
                    >
                        <div className="slider-block">
                            <div className="slider-text">
                                Text
                            </div>
                            <div className="slider-img">
                                <img src={logo} alt="" />
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;