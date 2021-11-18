import React, {useEffect, useState} from 'react';

import './index.css';

export default function Thumbnail(props){
    let content = {title:{url:"#",firstTitle:"I am Title1",secondTitle:"I am Title2"}};
    let img = {toUrl:"#",url:"./img/Thumbnail/first.png",name:"title"};
    let text = "文本内容文本内容文本内容文本内容文本内容文本内容";
    
    // 此处用于初始化数据
    useEffect(()=>{
        return null;
    });
    
    return(
        <div className={"TN_container"}>
            {/*缩略图容器*/}
            <div><a href={img.toUrl}>
                {/*缩略图*/}
                <img src={img.url} alt={img.name}/>
            </a></div>

            <div className={"TN_content"}>
                {/*缩略图文本内容*/}
                <h2><a href={content.title.url}>
                    {content.title.firstTitle} <br/>
                    <small>{content.title.secondTitle}</small>
                </a></h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
