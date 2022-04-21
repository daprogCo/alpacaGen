import mouthDefault from "../../images/mouth/default.png";
import astonished from "../../images/mouth/astonished.png";
import eating from "../../images/mouth/eating.png";
import laugh from "../../images/mouth/laugh.png";
import tongue from "../../images/mouth/tongue.png";

const Mouth = props => {
    let style = props.style;
    let img = mouthDefault;

    if (style === "astonished") {
        img = astonished;
    } else if (style === "eating") {
        img = eating;
    } else if (style === "laugh") {
        img = laugh;
    } else if (style === "tongue") {
        img = tongue;
    }

    return (
        <div className="styles">
            <img src={img} alt="" />
        </div>
    );
}

export default Mouth;