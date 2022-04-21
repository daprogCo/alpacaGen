import darkBlue from "../../images/backgrounds/darkblue50.png";
import green from "../../images/backgrounds/green60.png";
import grey from "../../images/backgrounds/grey40.png";
import red from "../../images/backgrounds/red70.png";

const Background = props => {
    let style = props.style;
    let img = darkBlue;

    if (style === "green") {
        img = green;
    } else if (style === "grey") {
        img = grey;
    } else if (style === "red") {
        img = red;
    }

    return (
        <div className="styles">
            <img src={img} alt="" />
        </div>
    );
}

export default Background;
