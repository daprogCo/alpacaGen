import React, { useState } from "react";
import {toPng} from "html-to-image";
import alpacas from "../alpacas.json";
import download from "downloadjs";

const defaultAlpaca = () => {
  const attributes = {};
  for (const attr in alpacas) {
      attributes[attr] = alpacas[attr][0];
  }
  return attributes;
}
const randomAlpaca = () => {
    const attributes ={};
    for (const attr in alpacas) {
        let random = Math.floor(Math.random() * alpacas[attr].length);
        attributes[attr] = alpacas[attr][random];
    }
    return attributes;
}

const downloadPng = () => {
    toPng(document.getElementById("alpaca"))
        .then(function (dataUrl) {
            download(dataUrl, "alpaca.png");
        })
}

export const Context = React.createContext({});

export const AlpacaApp = props => {
    const [alpaca, setAlpaca] = useState(defaultAlpaca());
    const [activeStyle, setActiveStyle] = useState("accessories");

    const randomize = () => {
        setAlpaca(randomAlpaca());
    }

    const changeAttr = attr => {
        setActiveStyle(attr);
    }

    const changeStyle = (attr, style) => {
        let newAlpaca = {...alpaca};
        newAlpaca[attr] = style;
        setAlpaca(newAlpaca);
    }

    return (
        <Context.Provider value={{
            alpaca,
            activeStyle,
            actions: {
                randomize,
                changeAttr,
                changeStyle,
                downloadPng 
            }
        }}>
            {props.children}   
        </Context.Provider>
    );
}