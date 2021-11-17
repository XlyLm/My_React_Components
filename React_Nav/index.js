import React, {useEffect, useState} from 'react';

import "./index.css";

export default function Nav(props){
    let options = [{content:"first",url:"#"},
        {content:"second",url:"#"},
        {content:"third",url:"#"}];
    let brand = {content:"Brand",url:"#"};
    let login_url = "#";
    let register_url = "#";

    // 此处用于初始化数据
    useEffect(()=>{
        return null;
    });

    return (
        <div className={"nav_container"}>
            <div className={"nav"}>
                {/*导航商标，brand可以换为商标logo*/}
                <div className={"brand"}><a href={brand.url}>{brand.content}</a></div>
                {/*导航列表*/}
                <ul className={"nav_list"}>
                    {
                        options.map((value,index)=>{
                            return <li key={index}><a href={value.url}>{value.content}</a></li>
                        })
                    }
                </ul>
                {/*导航右侧下拉菜单，right_menu为组件*/}
                <div className={"nav_menu_right"}>right_menu</div>
                {/*导航登录、注册*/}
                <div className={"login_register_ctn"}>
                    <div><a href={login_url} className={"login_ctn"}>登录</a></div>
                    <div><a href={register_url} className={"register_ctn"}>注册</a></div>
                </div>
                {/*导航左侧下拉菜单，left_menu为组件*/}
                <div className={"nav_menu_left"}>left_menu</div>
            </div>
        </div>
    )
}
