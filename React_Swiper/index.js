import React, {useEffect, useState} from "react";

import "./index.css";

let timer=null;

export default function Nav(props){
    let myRef = null;
    let myRef2 = null;
    const [flag, setFlag] = useState(0);
    // 轮播图资源
    let options = [{name:"first",url:"./img/Swiper/first.jpeg",toUrl:"#"},
        {name:"second",url:"./img/Swiper/second.jpeg",toUrl:"#"},
        {name:"third",url:"./img/Swiper/third.jpeg",toUrl:"#"},
        {name:"fourth",url:"./img/Swiper/fourth.jpeg",toUrl:"#"}];

    // 此处用于初始化数据
    useEffect(()=>{
        changeFlag(myRef2)
        setTimer();
        return function clear(){
            clearInterval(timer);
        };
    });

    const setTimer = ()=>{
        // 轮播图开启定时器函数
        timer = setInterval(()=>{
            if(myRef !== null){
                if(parseInt(myRef.style.left) <= -(options.length - 1) * 512){
                    myRef.style.left = "0px";
                }else{
                    myRef.style.left = parseInt(myRef.style.left) - 512 + "px";
                }
                changeFlag(myRef2);
            }
        },3000);
    }
    const clearTimer = ()=>{
        clearInterval(timer);
    };
    // 去上一张图片
    const previous = ()=>{
        if(parseInt(myRef.style.left) < 0){
            myRef.style.left = parseInt(myRef.style.left) + 512 + "px";
        }else{
            myRef.style.left = -(options.length - 1) * 512 +"px";
        }
        changeFlag(myRef2);
    };
    // 去下一张图片
    const next = ()=>{
        if(parseInt(myRef.style.left) > -(options.length - 1) * 512){
            myRef.style.left = parseInt(myRef.style.left) - 512 + "px";
        }else{
            myRef.style.left = "0px";
        }
        changeFlag(myRef2);
    };
    // 改变flag指向
    const changeFlag = (ref)=>{
        setFlag(-parseInt(myRef.style.left)/512);
        setTimeout(()=>{
            [...ref.children].forEach((value,index)=>{
                if(index === flag){
                    [...value.children][0].className = "active";
                }else{
                    [...value.children][0].className = " ";
                }
            })
        },100)
    };

    return (
        <div className={"swiper_container"} onMouseEnter={clearTimer} onMouseLeave={setTimer}>
            {/*轮播图容器*/}
            <ul className={"swiper"} ref={(c)=>{myRef = c;}} style={{left:"0px"}}>
                {/*轮播图*/}
                {
                    options.map((value,index)=>{
                        return <li key={index}><a href={value.toUrl}><img src={value.url} alt={value.name}/></a></li>
                    })
                }
            </ul>
            <ul className={"swiper_logo"} ref={(c)=>{myRef2 = c;}}>
                {/*轮播图表识*/}
                {
                    options.map((value, index, array)=>{
                        return <li key={index}><a href={"/#"} className={" "}> </a></li>
                    })
                }
            </ul>
            {/*控制按纽*/}
            <div className={"controls controls_previous"}><a href="/#" onClick={previous}>&#8678;</a></div>
            <div className={"controls controls_next"}><a href="/#" onClick={next}>&#8680;</a></div>
        </div>
    )
}