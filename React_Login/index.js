import React, {useState,useEffect} from "react";

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
        if(name === "user"){
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
        //检验输入是否为空
        if(data.test === undefined||data.test === ""){
            test_err.innerText = "请输入验证码";
            return false;
        }
        if(data.user === undefined||data.user === ""){
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
        if((data.test === undefined||data.test === "")||(data.user === undefined||data.user === "")){
            // 更新验证码
            updateTest();
            return null;
        }
        //向后端发送数据验证用户和密码
        //一下为模拟数据
        const user = "15283117495";
        const password = "123456789";
        if(data.user !== user){
            user_err.innerText = "用户不存在!";
            // 更新验证码
            updateTest();
        }else if(data.password !== password){
            pd_err.innerText = "密码错误!";
            // 更新验证码
            updateTest();
        }else{
            alert("登录成功!");
        }
    }
    return (
        <div className={"login_container"}>
            <form action="#"  onSubmit={submit}>
                <h1>LOGIN</h1>
                {/*用户名输入框*/}
                <div className="user">
                    <i className={"iconfont icon-ren"}></i>
                    <input name={"user"} type="text" placeholder={"请输入手机号"} onChange={handleInputChange}
                        onBlur={isPhone} onFocus={clear_err} autoComplete={"off"} value={data.user||""}/>
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
