import React from "react";
import { Layout } from "antd";
// Breadcrumb
import {  BrowserRouter as Router, } from "react-router-dom";

import Routers from "../Router";
import RoutersSidercustom from "./Sider";
const { Header, Content } = Layout;
// Footer

class App extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
         <Router>
        <RoutersSidercustom />
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: "16px 16px" }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* <div
              className="site-layout-background"
           
            > */}
              <Routers />
            {/* </div> */}
          </Content>
        </Layout>
        </Router>
      </Layout>
    );
  }
}
export default App;

