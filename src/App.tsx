import {Layout, Menu, Row} from 'antd';
import {Content, Footer, Header} from 'antd/lib/layout/layout';
import React from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "./router";

function App() {
    const navigate = useNavigate()
    return (
        <Layout className="layout">
            <Header>
                <Row justify='end'>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item key={1} onClick={() => navigate(RouteNames.MAIN)}>Home</Menu.Item>
                        <Menu.Item key={2} onClick={() => navigate(RouteNames.PEOPLE)}>People</Menu.Item>
                        <Menu.Item key={3} onClick={() => navigate(RouteNames.STARSHIPS)}>Starships</Menu.Item>
                        <Menu.Item key={4} onClick={() => navigate(RouteNames.PLANETS)}>Planets</Menu.Item>
                    </Menu>
                </Row>
            </Header>
            <Content>
                <AppRouter/>
            </Content>
            <Footer style={{textAlign: 'center'}}>StarWars DB</Footer>
        </Layout>
    );
}

export default App;
