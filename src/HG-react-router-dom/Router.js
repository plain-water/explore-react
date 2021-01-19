import { Component } from 'react'
import RouterContext from "./RouterContext"
export default class Router extends Component {
    static computeRootMatch(pathname) {
        return {path: "/", url: "/", params: {}, isExact: pathname === "/"};
      }
    constructor(props) {
        super(props)
        this.state = {
            location: props.history.location
        }

    }
    componentDidMount() {
        this.unlisten = this.props.history.listen(location => {
            // location发生变化，执行回调
            this.setState({ location });
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }
    render() {
        // console.log(this.state.location,this.props.history);
        return <RouterContext.Provider
            value={{
                history: this.props.history,
                location: this.state.location,
                match:Router.computeRootMatch(this.state.location.pathname)
            }}
        >
            {this.props.children}
        </RouterContext.Provider>
    }
}
