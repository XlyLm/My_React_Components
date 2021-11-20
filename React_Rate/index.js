import React, {useState,useEffect} from "react";

import "./index.css";
import "./iconfont/iconfont.css";

export default function Nav(props){
    // 表情数组
    const expresses = [{type: "icon-kulian", color: 'black'},
        {type: "icon-kulian", color: '#c0c4cc'},
        {type: "icon-lian-s", color: 'rgb(200, 139, 48)'},
        {type: "icon-xiaolian", color: 'rgb(236, 176, 85)'},
        {type: "icon-xiaolian", color: 'orange'},
        {type: "icon-cry", color: '#c0c4cc'}];
    // 初始化表情
    const [express, setExpress] =useState([expresses[5],expresses[5],expresses[5],expresses[5],expresses[5]]);
    // 评语数组
    const comments = [{value: "非常不满意", color: "red"},
        {value: "不满意", color: "orange"},
        {value: "一般", color: "gray"},
        {value: "满意", color: "blue"},
        {value: "非常满意", color: "green"}];
    const [comment, setComment] = useState({});
    const [save, setSave] = useState(false);
    // 此处用于初始化数据
    useEffect(()=>{
        return null;
    });
    // 移动鼠标，表情变化
    function show(flag) {
        return function () {
            setExpress(express.map((value,index)=>{
                return index<=flag?expresses[flag]:expresses[5];
            }));
            setComment(comments[flag]);
        }
    }
    // 清除表情
    function clearExpress() {
        if(!save){
            setExpress([expresses[5],expresses[5],expresses[5],expresses[5],expresses[5]]);
            setComment({});
        }
    }
    // 保存评分
    function isSave(){
        setSave(true);
    }

    return (
        <div className={"rate_container"} onMouseLeave={clearExpress} onMouseEnter={()=>setSave(false)}>
            {/*评分*/}
            {
                express.map((value,index)=>{
                    return <div className={"rate"} key={index} onMouseEnter={show(index)} style={{"color":value.color}}
                            onClick={isSave}>
                            <i className={"iconfont "+value.type}></i>
                           </div>
                })
            }
            {/*评语*/}
            <div className={"comment"} style={{"color":comment.color}}>{comment.value}</div>
        </div>
    )
}