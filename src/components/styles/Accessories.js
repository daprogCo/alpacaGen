import earings from "../../images/accessories/earings.png";
import flower from "../../images/accessories/flower.png";
import glasses from "../../images/accessories/glasses.png";
import headphone from "../../images/accessories/headphone.png";

const Accessories = props => {
    let style = props.style;
    let img = null;
    let index = {
        zIndex: 1
    };

    if (style === "earings") {
        img = earings;
    } else if (style === "flower") {
        img = flower;
    } else if (style === "glasses") {
        img = glasses;
    } else if (style === "headphone") {
        img = headphone;
        index.zIndex = 0;
    }

    return (
        <div className="styles"  style={index}>
            <img src={img} alt="" />
        </div>
    );
}

export default Accessories;