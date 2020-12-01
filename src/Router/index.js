import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./config";

export default function RouteConfigExample() {
  return (
    <Switch>
      <Redirect exact from="/" to="/Welcome" />
      <Route path="/Welcome" exact>
        <Welcome />
      </Route>
      {routes.reduce((curent, item, key) => {
        if (item.routes) {
          let arry = item.routes.reduce((curent1, item1, key1) => {
            curent1.push(
              <RouteWithSubRoutes key={key + "" + key1} {...item1} />
            );
            return curent1;
          }, []);
          curent.push(...arry);
        }
        return curent;
      }, [])}
    </Switch>
  );
}
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
function Welcome() {
  return <div className="pageContainer">欢迎光临</div>;
}
