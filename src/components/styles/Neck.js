import neckDefault from "../../images/neck/default.png";
import backward from "../../images/neck/bend-backward.png";
import forward from "../../images/neck/bend-forward.png";
import thick from "../../images/neck/thick.png";

const Neck = props => {
    let style = props.style;
    let img = neckDefault;

    if (style === "bend backward") {
        img = backward;
    } else if (style === "bend forward") {
        img = forward;
    } else if (style === "thick") {
        img = thick;
    }

    return (
        <div className="styles">
            <img src={img} alt="" />
        </div>
    );
}

export default Neck;