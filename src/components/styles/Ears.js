import earsDefault from "../../images/ears/default.png";
import backward from "../../images/ears/tilt-backward.png";
import forward from "../../images/ears/tilt-forward.png";

const Ears = props => {
    let style = props.style;
    let img = earsDefault;

    if (style === "tilt backward") {
        img = backward;
    } else if (style === "tilt forward") {
        img = forward;
    }

    return (
        <div className="styles">
            <img src={img} alt="" />
        </div>
    );
}

export default Ears;