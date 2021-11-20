import React, {useState,useEffect} from "react";

import "./index.css";

export default function Search(props){
    const [myRef, setMyRef] = useState(null);
    const [text, setText] = useState(0);
    const [width, setWidth] = useState("0");
    // 用于初始化或更新组件时调用
    useEffect(()=>{

    })
    // 滑条按钮移动函数
    function move(e){
        const target = e.target;
        const x = e.pageX;
        const left = parseFloat(target.style.left);
        myRef.onmousemove = function (event) {
            if(left>=-0.5&&left<=23.5){
                const left2 = left + (event.pageX - x)/16;
                //改变滑块位置
                if(left2<=-0.5){
                    target.style.left = -0.5 +"em";
                }else if(left2>=23.5){
                    target.style.left = 23.5 +"em";
                }else{
                    target.style.left = left2 + "em";
                }
                // 改变滑条长度
                setWidth((parseFloat(target.style.left)+0.5)+"em");
                // 改变文本
                setText((parseFloat(target.style.left)+0.5)/24*100);
            }
        }
    }
    // 清除移动
    function clearMove(){
        myRef.onmousemove = null;
    }

    return (
        <div className={"slider_containers"} ref={(c)=>{setMyRef(c)}} onMouseLeave={clearMove}
            onMouseUp={clearMove}>
            <div className={"title"}>滑条</div>
            <div className={"slider_container"}>
                <div className={"slider"} style={{"width":width}}></div>
                <div className={"slider_btn "} onMouseDown={move} onMouseUp={clearMove} style={{"left":"-0.5em"}}>
                    <div className={"info"}>{text}</div>
                </div>
            </div>
        </div>
    )
}