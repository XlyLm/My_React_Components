import React, {useState,useEffect} from "react";

import "./index.css";

export default function Switch(props){
    const [isOpen, setIsOpen] = useState(false);
    // 此处用于初始化数据
    useEffect(()=>{
        return null;
    });
    //控制开关
    function changeSwitch() {
        setIsOpen(!isOpen);
    }
    return (
        <div className={"switch_container "+(isOpen?"opens":"")} onClick={changeSwitch}>
            <div className={"switch "+(isOpen?"open":"")}></div>
        </div>
    )
}