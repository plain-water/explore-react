import {
  DesktopOutlined,
  // PieChartOutlined,
  // FileOutlined,
  // TeamOutlined,
  // UserOutlined,
} from '@ant-design/icons';
import { Antform3, Antform4 } from "../page/index.js"
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
  }

];

export default routes