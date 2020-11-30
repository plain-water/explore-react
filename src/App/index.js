import React from "react"
import { Layout } from 'antd';
// Breadcrumb
import Router from "../Router"
import LSider from "./Sider"
const { Header, Content } = Layout;
// Footer


class App extends React.Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
       <LSider/>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '16px 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ minHeight:"100%"}}>
            <Router/>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;
