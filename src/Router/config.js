import {
  DesktopOutlined,
  // PieChartOutlined,
  // FileOutlined,
  // TeamOutlined,
  // UserOutlined,
} from '@ant-design/icons';
import { Antform3, Antform4,ReduxDome } from "../page/index.js"
const routes = [
  {
    path: "/antdForm",
    name: "模拟antdForm",
    icon: <DesktopOutlined/>,
    routes: [
      {
        path: "/antdForm/antdForm3",
        name: "antdForm3",
        component:Antform3
      },
      {
        path: "/antdForm/antdForm4",
        name: "antdForm4",
        component:Antform4

      }
    ]
  },
  {
    path: "/ReduxSourceCode",
    name: "redux源码分析",
    icon: <DesktopOutlined/>,
    routes: [
      {
        path: "/ReduxSourceCode/ReduxDome",
        name: "ReduxDome",
        component:ReduxDome
      }
      // ,
      // {
      //   path: "/antdForm/antdForm4",
      //   name: "antdForm4",
      //   component:Antform4

      // }
    ]
  }

];

export default routes