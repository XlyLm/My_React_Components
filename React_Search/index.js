import React, {useState,useEffect} from "react";

import "./index.css";
import "./iconfont/iconfont.css";

export default function Search(props){
    const [show, setShow] = useState(true);
    const [value, setValue] = useState("");

    // 用于初始化或更新组件时调用
    useEffect(()=>{

    })
    // 删除幕布
    function clearMask(){
        setShow(false);
    }
    // 显示幕布
    function showMask(){
        setShow(true);
    }
    // 监测输入
    function input(e){
        setValue(e.target.value);
    }
    // 发送搜索内容
    function push(){
        // console.log(value);
        // 清空输入
        // setValue("");
    }

    return (
        <div className={"search_container"} onMouseLeave={showMask}>
            {show?<div className={"search_mask"} onMouseEnter={clearMask}><i className={"iconfont icon-sousuo"}>搜索</i></div>:null}
            <div className={"search_box"}>
                <input className={"search"} value={value} type="text" placeholder={"搜索"} onChange={input}/>
                <a href={"#/"} className={"search_btn"} onClick={push}><i className={"iconfont icon-sousuo"}></i></a>
            </div>
        </div>
    )
}