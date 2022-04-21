import legDefault from "../../images/leg/default.png";
import bubbleTea from "../../images/leg/bubble-tea.png";
import cookie from "../../images/leg/cookie.png";
import gameConsole from "../../images/leg/game-console.png";
import backward from "../../images/leg/tilt-backward.png";
import forward from "../../images/leg/tilt-forward.png";

const Leg = props => {
    let style = props.style;
    let img = legDefault;

    if (style === "bubble tea") {
        img = bubbleTea;
    } else if (style === "cookie") {
        img = cookie;
    } else if (style === "game console") {
        img = gameConsole;
    } else if (style === "tilt backward") {
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

export default Leg;