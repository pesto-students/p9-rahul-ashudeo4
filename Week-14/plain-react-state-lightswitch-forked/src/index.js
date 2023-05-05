import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider, connect } from "react-redux";
import store from "./store";

class Room extends React.Component {
  flipLight = () => {
    const dispatch = this.props.dispatch;
    dispatch({ type: "TOGGLE" });
  };

  render() {
    const lightedness = this.props.light ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}
const mapStateToProps = function (store) {
  return {
    light: store
  };
};
const RoomConnected = connect(mapStateToProps)(Room);
ReactDOM.render(
  <Provider store={store}>
    <RoomConnected />
  </Provider>,
  document.getElementById("root")
);
