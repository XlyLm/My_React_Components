import React from "react";

import points from "./points.module.css";

export default function Points(props){
    return (
        <div className={points.container}>
            <div className={points.first}></div>
            <div className={points.second}></div>
            <div className={points.third}></div>
            <div className={points.fourth}></div>
        </div>
    )
}