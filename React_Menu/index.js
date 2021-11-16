import React, {useEffect, useState} from 'react';

import './index.css';

export default function Menu(props){
    let options = [{content:"first",url:"#"},
        {content:"second",url:"#"},
        {content:"third",url:"#"}];
    let name = "下拉菜单名";

    const [show, setShow] = useState(true);

    // 此处用于初始化数据
    useEffect(()=>{
        return null;
    });
    function changeShow(){
        setShow(!show);
    }
    return(
        // 菜单容器
        <div className={"menu_container"}>
            {/*菜单按钮*/}
            <button className={"menu_btn "} onClick={changeShow}>
                {name}
                {show?<span className={"caret"}>&#9660;</span>:<span className={"caret"}>&#9650;</span>}
            </button>
            {/*菜单*/}
            <ul className={"menu"} style={{"display":show?"none":"block"}}>
                {
                    options.map((value, index)=> {
                        return <li key={index}><a href={value.url}>{value.content}</a></li>
                    })
                }
            </ul>
        </div>
    )
}