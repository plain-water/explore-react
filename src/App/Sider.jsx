import React from "react";
import { Layout, Menu } from "antd";
import routes from "../Router/config";
import { Link, withRouter } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;
class RoutersSidercustom extends React.Component {
  static setMenuOpen = (props) => {
    const { pathname } = props.location;
    return {
      openKey: pathname.substr(0, pathname.lastIndexOf("/")),
      selectedKey: pathname,
    };
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.timeKey !== prevState.timeKey) {
      return {
        timeKey: nextProps.timeKey,
      };
    }
    return null;
  }
  state = {
    collapsed: false,
    selectedKey: this.props.location.pathname,
    openKey: "",
    timeKey: this.props.timeKey,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  openMenu = (v) => {
    this.setState({
      openKey: v[v.length - 1],
    });
  };
  menuClick = (e) => {
    let selectedKey = e.key,
      path = this.props.location.pathname;
    console.log(path, this.props.location.pathname);
    this.timer = setTimeout(() => {
      if (path === "/Welcome" && selectedKey === this.props.location.pathname)
        return;
      this.setState({
        selectedKey,
      });
      const { popoverHide } = this.props;
      popoverHide && popoverHide();
    }, 100);
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <Menu
          theme="dark"
          selectedKeys={[this.props.location.pathname]}
          openKeys={[this.state.openKey]}
          mode="inline"
          onClick={this.menuClick}
          onOpenChange={this.openMenu}
        >
          <div className="logo" />
          {routes.map((v) => (v.routes ? SubMenuFn(v) : SubMenuFn(v)))}
        </Menu>
      </Sider>
    );
  }
}

const SubMenuFn = (v) => {
  return (
    <SubMenu key={v.path} icon={v.icon} title={v.name}>
      {v.routes.map((v) => MenuItem(v))}
    </SubMenu>
  );
};

const MenuItem = (v) => {
  return (
    <Menu.Item key={v.path}>
      <Link to={(v.path || v.key) + (v.query || "")}>{v.name}</Link>
    </Menu.Item>
  );
};

export default withRouter(RoutersSidercustom);
