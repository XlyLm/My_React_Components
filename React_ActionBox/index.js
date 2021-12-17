import React from "react";

import actionBox from "./actionBox.module.css";
import "../../iconfont/iconfont.css";

export default function ActionBox(props) {
    return (
        <div className={actionBox.container}>
            <div className={actionBox.top}></div>
            <div className={actionBox.right}></div>
            <div className={actionBox.bottom}></div>
            <div className={actionBox.left}></div>
            <div className={actionBox.content}>XLY <i className={"iconfont icon-aixin"}></i> LM</div>
        </div>
    )
}