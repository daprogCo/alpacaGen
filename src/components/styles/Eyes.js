import eyesDefault from "../../images/eyes/default.png";
import angry from "../../images/eyes/angry.png";
import naughty from "../../images/eyes/naughty.png";
import panda from "../../images/eyes/panda.png";
import smart from "../../images/eyes/smart.png";
import star from "../../images/eyes/star.png";

const Eyes = props => {
    let style = props.style;
    let img = eyesDefault;
    let index = {
        zIndex: 1
    };

    if (style === "angry") {
        img = angry;
    } else if (style === "naughty") {
        img = naughty;
    } else if (style === "panda") {
        img = panda;
    } else if (style === "smart") {
        img = smart;
    } else if (style === "star") {
        img = star;
    }

    return (
        <div className="styles" style={index}>
            <img src={img} alt="" />
        </div>
    );
}

export default Eyes;