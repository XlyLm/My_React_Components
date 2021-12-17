import React, {useEffect, useState} from 'react';

import './index.css';
import './iconfont/iconfont.css';

export default function Aside(props){
    // 此处用于初始化数据
    useEffect(()=>{
        return null;
    });

    return(
        // 菜单容器
        <div className={"aside_container"}>
            <a href="#/" className="block">
                <span className="iconfont icon-shouji"></span><br/>
                <p>手机APP</p>
            </a>
            <a href="#/" className="block">
                <span className="iconfont icon-ren"></span><br/>
                <p>个人中心</p>
            </a>
            <a href="#/" className="block">
                <span className="iconfont icon-spanner-fill"></span><br/>
                <p>售后服务</p></a>
            <a href="#/" className="block">
                <span className="iconfont icon-24gf-phoneLoudspeaker"></span><br/>
                <p>人工客服</p></a>
            <a href="#/" className="block">
                <span className="iconfont icon-gouwuche"></span><br/>
                <p>购物车</p></a>
            <a href="#top" className="hide-last">
                <span className="iconfont icon-xiangshangjiantou"></span><br/>
                <p>回顶部</p>
            </a>
        </div>
    )
}
