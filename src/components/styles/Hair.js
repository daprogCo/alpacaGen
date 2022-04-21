import hairDefault from "../../images/hair/default.png";
import bang from "../../images/hair/bang.png";
import curls from "../../images/hair/curls.png";
import elegant from "../../images/hair/elegant.png";
import quiff from "../../images/hair/quiff.png";
import short from "../../images/hair/short.png";

const Hair = props => {
    let style = props.style;
    let img = hairDefault;
    let index = {
        zIndex: 1
    };

    if (style === "bang") {
        img = bang;
    } else if (style === "curls") {
        img = curls;
    } else if (style === "elegant") {
        img = elegant;
    } else if (style === "quiff") {
        img = quiff;
    } else if (style === "short") {
        img = short;
    }

    return (
        <div className="styles" style={index}>
            <img src={img} alt="" />
        </div>
    );
}

export default Hair;