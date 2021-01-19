import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  // Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
  // withRouter,
  Prompt
} from "./HG-react-router-dom";
import "./App.css"
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   useHistory,
//   useLocation,
//   useRouteMatch,
//   useParams,
//   Prompt,
//   withRouter
//   // Redirect
//   // Prompt
// } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import _404Page from "./pages/_404Page";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {count < 3 && (
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login/1111">登录</Link>
          <Link to="/product/123">商品</Link>

          <Switch>
          <Route
            path="/"
            exact
            //children={children}
            //component={HomePage}

            // component={() => <HomePage />}
          render={() => <HomePage />}
          //render={render}
          >
            {/* 12121121121121212112121212121 */}
            </Route>
          <Route path="/user" component={UserPage} />
          <Route path="/login/:id" render={() => <LoginPage />} />
          <Route
              path="/product/:id"
              component={Product}

              // render={() => <Product />}
            />
          <Route component={_404Page} />
          </Switch> 
        </Router>
      )}
    </div>
  );
}

export default App;

function Product() {
  // console.log("match", match); //sy-log

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const params = useParams();

  // console.log("props", history, location, match, params); //sy-log
  const [confirm, setConfirm] = useState(false);

  const {url} = match;
  const {id} = params;
  return (
    <div>
      <h1>Search-{id}</h1>

    
<Link to="/">首页</Link>
<Prompt
        when={confirm}
        // message="Are you sure you want to leave?"
        message={location => {
          return "Are you sure you want to leave-fun";
        }}
      />
        <Link to={url + "/detail"}>详情</Link>
      <Route path={url + "/detail"} component={Detail} />
    </div>
  );
}

function Detail({match}) {
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}

function children(props) {
  console.log("children props", props); //sy-log
  return <div>children</div>;
}

function render(props) {
  console.log("render props", props); //sy-log
  return <div>render</div>;
}
