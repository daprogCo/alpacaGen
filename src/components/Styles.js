import React, { useContext } from "react";
import { Context } from "./Context";
import alpacas from "./alpacas.json";

const Styles = () => {
    const { actions, activeStyle, alpaca } = useContext(Context);
    const styles = alpacas[activeStyle];
    const selected = alpaca[activeStyle];

    return (
        <div className="choices">
            <h2>{activeStyle} styles</h2>
            {styles.map(style =>
                <button 
                    onClick={() => actions.changeStyle(activeStyle, style)} className={selected === style ? "selected" : "button-choice"}
                    key={style}
                >
                    {style}
                </button>   
            )}
        </div>
    );
}

export default Styles;