import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils'

import Header from '../../components/header/header'
import NavLeft from '../../components/nav-left/nav-left'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../products/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

export default class admin extends Component{

    state = {
        collapsed: false,
    };

    render() {
        const user = memoryUtils.user
        // 如果内存没有存储user ==> 当前没有登陆
        if(!user || !user._id) {
            // 自动跳转到登陆(在render()中)
            return <Redirect to='/login'/>
        }

        const { Footer, Sider, Content } = Layout;
        return (
            <Layout style={{minHeight:'100%'}}>
                <Sider width='240'>
                    <NavLeft/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                            <Redirect from='/' exact to='/home'/>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/user' component={User}/>
                            <Route path='/role' component={Role}/>
                            <Route path="/charts/bar" component={Bar}/>
                            <Route path="/charts/pie" component={Pie}/>
                            <Route path="/charts/line" component={Line}/>
                            {/*<Route path="/order" component={Order}/>*/}
                            {/*<Route component={NotFound}/>*/}
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}
