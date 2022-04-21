import React, { useContext } from "react";
import Accessories from "./styles/Accessories";
import Ears from "./styles/Ears";
import Eyes from "./styles/Eyes";
import Hair from "./styles/Hair";
import Leg from "./styles/Leg";
import Mouth from "./styles/Mouth";
import Neck from "./styles/Neck";
import Background from "./styles/Background";
import nose from "../images/nose.png";
import Randomize from './Randomize';
import { Context } from "./Context";

const AlpacaImage = () => {
    let { alpaca } = useContext(Context);
    return (
        <div className='container-alpaca'>
            <div className="alpaca" id="alpaca">
                <Background style={alpaca.background} />
                <Ears style={alpaca.ears} />
                <Neck style={alpaca.neck} />
                <div className="styles">
                    <img src={nose} alt="" />
                </div>
                <Mouth style={alpaca.mouth} />
                <Leg style={alpaca.leg} />
                <Hair style={alpaca.hair} />
                <Eyes style={alpaca.eyes} />
                <Accessories style={alpaca.accessories} />
            </div>
            <Randomize />
        </div>
    );
}

export default AlpacaImage;