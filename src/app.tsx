import React, { Component } from "react";
import { globalStore } from "./stores";
import "./app.scss";

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
