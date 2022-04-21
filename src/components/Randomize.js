import React, { useContext } from "react";
import { Context } from "./Context";

const Randomize = () => {
    let { actions } = useContext(Context);
    return (
        <div>
            <button className="button-choice" onClick={() => actions.randomize()}>randomize</button>
            <button className="button-choice" onClick={() => actions.downloadPng()}>download</button>
        </div>
    );
}

export default Randomize;