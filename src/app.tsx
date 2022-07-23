
import React, { Component } from "react";
import "./app.scss";
import { globalStore } from "./stores";

export const GlobalContext = React.createContext(globalStore);

export const { Provider, Consumer } = GlobalContext;

class App extends Component {
    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // this.props.children 是将要会渲染的页面
    render() {
        return <Provider value={globalStore}>{this.props.children}</Provider>;
    }
}

export default App;
