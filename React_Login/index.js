import React, {useState,useEffect} from "react";
import axios from "axios";

import "./index.css";
import "./iconfont/iconfont.css";

export default function Search(props){
    const [test_er, setTester] = useState(null);    //验证码
    const [flag, setFlag] = useState(true);     //验证码更新标志
    const [data, setData] = useState({});   //用户信息
    //获取警告框元素
    let user_err;
    let pd_err;
    let test_err;

    // 用于初始化或更新组件时调用
    useEffect(()=>{
        // 定义一个简单的随机验证码
        const str = "0123456789ABCDEFJHIJKLMPOPQRSTUVWXYZ";
        const first = parseInt(Math.random()*26);
        const second = parseInt(Math.random()*26);
        const third = parseInt(Math.random()*26);
        const fourth = parseInt(Math.random()*26);
        setTester(str[first]+str[second]+str[third]+str[fourth]);
    },[flag])

    // 更新验证码
    function updateTest(){
        setFlag(!flag);
    }
    // 获取输入信息
    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value.trim();
        setData({...data,[name]:value});
    }
    //清除报错
    function clear_err(e) {
        const name = e.target.name;
        if(name === "username"){
            user_err.innerText = "";
        }
        if(name === "password"){
            pd_err.innerText = "";
        }
        if(name === "test"){
            test_err.innerText = "";
        }
    }
    // 输入格式有错
    function isPhone(e) {
        const value = e.target.value;
        const regex = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
        // 如果手机号格式不正确
        if(!regex.test(value)){
            user_err.innerText = "手机号格式不正确!";
        }
    }
    // 提交信息
    function submit(e){
        e.preventDefault();
        user_err.innerText = "";
        pd_err.innerText = "";
        //检验输入是否为空
        if(data.test === undefined||data.test === ""){
            test_err.innerText = "请输入验证码";
            return false;
        }
        if(data.username === undefined||data.username === ""){
            user_err.innerText = "手机号不能为空!";
        }
        if(data.password === undefined||data.password === ""){
            pd_err.innerText = "密码不能为空!";
        }
        //检查验证码是否正确
        if(data.test !== test_er){
            // 更新验证码
            test_err.innerText = "验证码错误!";
            updateTest();
            return null;
        }
        if((data.test === undefined||data.test === "")||(data.username === undefined||data.username === "")){
            // 更新验证码
            updateTest();
            return null;
        }
        // 为servlet传参
        let params = new URLSearchParams();
        params.append('username', data.username);
        params.append('password', data.password);
        params.append('test', "***");
        // 向后端发送请求验证登录
        axios.post("/api/JavaWeb/login", params).then(res=>{
            const rd = res.data;
            if(rd.status==="00"){
                user_err.innerText = rd.value;
            }else if(rd.status==="01"){
                pd_err.innerText = "密码错误!";
            }else{
                // 如果验证正确提交表单并跳转
                e.target.submit();
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className={"login_container"}>
            {/*后端登录后界面接口*/}
            <form action="http://localhost:8080/JavaWeb/login" onSubmit={submit} method={"post"}>
                <h1>LOGIN</h1>
                {/*用户名输入框*/}
                <div className="user">
                    <i className={"iconfont icon-ren"}></i>
                    <input name={"username"} type="text" placeholder={"请输入手机号"} onChange={handleInputChange}
                        onBlur={isPhone} onFocus={clear_err} autoComplete={"off"} value={data.username||""}/>
                </div>
                <div className={"err_box"} ref={(c)=>user_err=c}></div>
                {/*密码输入框*/}
                <div className={"password"}>
                    <i className={"iconfont icon-24gl-lock2"}></i>
                    <input name={"password"} type="password" placeholder={"请输入密码"} onChange={handleInputChange}
                           onFocus={clear_err}  value={data.password||""}/>
                </div>
                <div className={"err_box"} ref={(c)=>pd_err=c}></div>
                {/*验证码*/}
                <div className="test_container">
                    <input name={"test"} type="text" className="test" placeholder={"验证码:"} onChange={handleInputChange}
                           onFocus={clear_err} autoComplete={"off"}  value={data.test||""}/>
                    <div className={"test_ers"}>
                        <div className="test_er">{test_er}</div>
                        <div className={"update"} onClick={updateTest}>点击刷新</div>
                    </div>
                </div>
                <div className={"err_box"} ref={(c)=>test_err=c}></div>
                {/*提交按钮*/}
                <input type="submit" value={"登录"} className={"submit"}/>
                {/*其他部分*/}
                <div className={"others"}>
                    <a href="#/">短信登录</a><span>|</span>
                    <a href="#/">快速注册</a><span>|</span>
                    <a href="#/">忘记密码</a>
                </div>
            </form>
        </div>
    )
}
